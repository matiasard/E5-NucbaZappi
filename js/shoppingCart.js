console.log('SHOPPING CART');

const cart = [];

/**
 * Agrega elemento a un array llamado cart
 *
 * @param {string} product
 * @param {number} quantity
 */
const addToCart = (product, quantity = 1) => {
  // console.log(`Ya hay un producto igual?: ${isProductExist(product)}`);
  // console.log(`Ya hay un producto igual?: ${item !== undefined}`);
  // if (isProductExist(product)) return;
  // debugger;
  const item = findShoppingProductById(product.id);

  //* 📝 SI el producto ya existe, solo se modifique la "cantidad"
  if (item !== undefined) item.quantity++;

  //* 📝 Si el producto no existe, se agrega al Array
  if (item === undefined) {
    cart.push({ product, quantity });
    console.log(`Se agrego ${quantity} ${product.name} al Carrito`);
    console.log(cart);
  }
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

// const isProductExist = product => {}
function isProductExist(product) {
  return cart.some(element => element?.product.id === product?.id);
}

function findShoppingProductById(id) {
  return cart.find(element => element.product.id === Number(id));
}

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
