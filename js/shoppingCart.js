console.log('SHOPPING CART');

const cart = [];

/**
 * Agrega elemento a un array llamado cart
 *
 * @param {string} product
 * @param {number} quantity
 */
const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`Se agrego ${quantity} ${product} al Carrito`);
};

/**
 * Calcula el total de cantidad de un array
 *
 * @param {any[]} arr
 * @return {number}  total
 */
const totalQuantity = arr => {
  let total = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity;
  }, 0);

  return total;
};

// const productos = [
//   { product: 'carne', quantity: 4 },
//   { product: 'pan', quantity: 3 },
//   { product: 'panC', quantity: 3 },
// ];

// const product = [0, 1, 2, 3, 4];
// const totalPrice = product.reduce(function (
//   valorAnterior,
//   valorActual,
//   indice,
//   vector
// ) {
//   return valorAnterior + valorActual;
// },
// 10);

export { cart, addToCart, totalQuantity };
