import RaspberryImg from '../img/Raspberry.png';
import BlackcurrantImg from '../img/blackcurrant.png';
import BlueberryImg from '../img/Blueberry.png';
import HoneyImg from '../img/Honey.png';

export const products = [
  {
    id: 1,
    title: "Jeleu de zmeură îmbogăţit în resveratrol",
    price: 0.00,
    stock: "out_of_stock",
    description: "Zmeura este un fruct parfumat, hrănitor și foarte bun la gust, cu puține calorii și bogat în vitamine și minerale. Conține antioxidanți și are un indice glicemic scăzut, ajutând la reglarea zahărului din sânge.",
    image: RaspberryImg
  },
  {
    id: 2,
    title: "Jeleu de coacăze îmbogăţit în resveratrol",
    price: 0.00,
    stock: "out_of_stock",
    description: "Produs gelificat obținut din fructe concentrate. Coacăzele reduc inflamația, îmbunătățesc sănătatea inimii și digestia datorită antioxidanților și compușilor bioactivi.",
    image: BlackcurrantImg
  },
  {
    id: 3,
    title: "Jeleu de afine îmbogăţit în resveratrol",
    price: 0.00,
    stock: "out_of_stock",
    description: "Afinele sunt super-fructe bogate în nutrienți și vitamina K, importante pentru sănătatea inimii și oaselor. Susțin imunitatea și sănătatea generală.",
    image: BlueberryImg
  },
  {
    id: 4,
    title: "Miere cremă cu pulpă de coacăze negre și extract de iulișcă",
    price: 0.00,
    stock: "out_of_stock",
    description: "Cremă obținută din miere și extracte naturale, utilă pentru ameliorarea stresului, anxietății și menținerea funcțiilor cognitive.",
    image: HoneyImg
  }
];

export const getStockStatus = (stock) => {
  switch (stock) {
    case 'in_stock':
      return { text: 'in_stock', color: 'green' };
    case 'low_stock':
      return { text: 'low_stock', color: 'red' };
    case 'out_of_stock':
      return { text: 'out_of_stock', color: 'red' };
    default:
      return { text: 'out_of_stock', color: 'red' };
  }
};
