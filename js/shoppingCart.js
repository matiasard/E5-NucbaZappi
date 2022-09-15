console.log('SHOPPING CART');

const cart = [];

const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`Se agrego ${quantity} ${product} al Carrito`);
};

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
