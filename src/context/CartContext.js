import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();
const LOCAL_STORAGE_KEY = 'cart.v1';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i)
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map(i => i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i)
          .filter(i => i.quantity > 0)
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

// Initializer reads from localStorage synchronously to avoid overwriting
const initFromStorage = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.items)) {
        return { items: parsed.items };
      }
    }
  } catch (_) {
    // ignore
  }
  return { items: [] };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, undefined, initFromStorage);

  // Persist whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch (_) {
      // ignore storage errors
    }
  }, [state.items]);

  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const getTotalPrice = () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const getTotalItems = () => state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
