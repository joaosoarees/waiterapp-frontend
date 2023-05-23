import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1684713228931-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1684713838615-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f4',
    table: '2',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1684713228931-quatro-queijos.png',
          price: 40,
        },
        quantity: 1,
        _id: '6372e48cbcd195b0d3d0f7f4'
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f2',
    table: '4',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Coca cola',
          imagePath: '1684713838615-coca-cola.png',
          price: 7,
        },
        quantity: 1,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  },
];
