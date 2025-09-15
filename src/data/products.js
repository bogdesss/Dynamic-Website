export const products = [
  {
    id: 1,
    title: "Mere Golden Delicious",
    price: 8.50,
    stock: "in_stock",
    description: "Mere proaspete, crocante și dulci"
  },
  {
    id: 2,
    title: "Pere Conference",
    price: 9.20,
    stock: "low_stock",
    description: "Pere aromate și suculente"
  },
  {
    id: 3,
    title: "Prune Stanley",
    price: 12.00,
    stock: "in_stock",
    description: "Prune mari și dulci, perfecte pentru dulceață"
  },
  {
    id: 4,
    title: "Cireșe Bing",
    price: 15.50,
    stock: "out_of_stock",
    description: "Cireșe mari și roșii, foarte dulci"
  },
  {
    id: 5,
    title: "Căpșuni",
    price: 18.00,
    stock: "in_stock",
    description: "Căpșuni proaspete, aromate și dulci"
  },
  {
    id: 6,
    title: "Zmeură",
    price: 22.00,
    stock: "low_stock",
    description: "Zmeură de grădină, foarte aromată"
  }
];

export const getStockStatus = (stock) => {
  switch (stock) {
    case 'in_stock':
      return { text: 'In stoc', color: 'green' };
    case 'low_stock':
      return { text: 'Stoc insuficient', color: 'red' };
    case 'out_of_stock':
      return { text: 'Stoc insuficient', color: 'red' };
    default:
      return { text: 'Stoc insuficient', color: 'red' };
  }
};
