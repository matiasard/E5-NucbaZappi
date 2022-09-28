'use strict';
import { productsData, saveLocalStorage } from '/js/bd.js';
import { cart as cartShop, addToCart, totalQuantity } from './shoppingCart.js';
import { randomElement } from './util.js';

// console.log(productsData);

//*------------_______ ✨ DATOS ✨ _______------------
let products; //botones agregar
// let products;

let popularProductContainer = document.getElementById(
  'product__popular-container'
);
let cardRecomendacion = document.querySelector('#card-recomendacion-container');

let cardCategortyContainer = document.querySelectorAll(
  '.card-category__container'
);
let parentCategoryCard = document.querySelector('.category-container');
let categoryCardResultElement = document.createElement('div');
let previousCategoryValue = '';

//*------------_______ ✨ FUNCION AUTO-EJECUION ✨ _______------------

const init = () => {
  if (localStorage.getItem('cart') === null) {
    saveLocalStorage(productsData);
  }

  //* Obtener datos del Local Storage
  let productList = JSON.parse(localStorage.getItem('products')) || [];
  console.log(productList);

  //* Display Cards
  renderCards(randomElement(productList, 8), popularProductContainer);
  renderRecommendationCards(randomElement(productList, 3), cardRecomendacion);

  //* Shopping Cart TEST 👇
  console.log(cartShop);
  console.log(`Cantidad Total de Productos: ${totalQuantity(cartShop)}`);

  //* Add Event Listener a los Botones "Agregar Carrito" 👇
  products = document.getElementsByClassName('products');
  addProducts(products);
};

init();

//*------------_______ ✨ FUNCIONES ✨ _______------------

//? ******** SECCION - MAS POPULARES - **************************************
/**
 * Renderizar elementos HTML en base a un array de objetos
 *
 * @param {object[]} foods
 * @param {HTMLElement} contenedorHTML
 */
function renderCards(foods, contenedorHTML) {
  for (const food of foods) {
    let templateCard = `
    <div class="col-12 mx-auto col-sm-6 col-md-4 col-lg-3 card-container">
      <div class="card h-100 card-container__info">
        <img src="${food.cardImg}" class="card-img-top card-container__img" alt="..." height="165">
        <div class="card-body">
          <h5 class="card-title fw-normal">${food.name}</h5>
          <p class="card-text text-muted">${food.description}.</p>
          <div class="row">
              <div class="col-6 col-md-6 my-auto d-flex justify-content-start">
                <span class="card-container__body-price">$${food.price}</span>
              </div>
              <div class="col-6 col-md-6 d-flex justify-content-end">
                <button class="btn btn-primary card-container__btn products"
                  data-id="${food.id}"
                  data-name="${food.name}"
                  data-description="${food.description}"
                  data-img="${food.cardImg}"
                  data-price="${food.price}">Agregar</button>
              </div>
            </div>
        </div>
      </div>
    </div>`;

    contenedorHTML.insertAdjacentHTML('beforeend', templateCard);
  }
}

//? ******** SECCION - RECOMENDACION - *************************************
function renderRecommendationCards(foods, contenedorHTML) {
  for (const food of foods) {
    let templateRecommendation = `
  <div class="card mb-3 mx-auto card-recomendacion">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-md-auto pt-3 pt-md-0">
        <img
          src="${food.cardImg}"
          height="60";
          class="img-fluid card-recomendacion__img" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title card-recomendacion__title">${food.name}</h5>
          <p class="card-text text-muted mb-1">${food.description}</p>
          <p class="mb-0 card-recomendacion__price">$${food.price}</p>
        </div>
      </div>
      <div class="col-md-3 pb-3">
        <button class="btn btn-primary w-100 products"
          data-id="${food.id}"
          data-name="${food.name}"
          data-description="${food.description}"
          data-img="${food.cardImg}"
          data-price="${food.price}">Agregar</button>
      </div>
    </div>
  </div>`;

    contenedorHTML.insertAdjacentHTML('beforeend', templateRecommendation);
  }
}

//? ******** SECCION - CATEGORIA - ******************************************
//*📝 Funcion para Filtar los Productos por Categoria
cardCategortyContainer.forEach(function (cardCategory) {
  cardCategory.addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    const isDifferentCategory = previousCategoryValue !== category;
    //* Array con los resultados de la categoria seleccionada
    let categoryResult = productsData.filter(
      food => food.category === category
    );
    let isFilterCategoryExists = document
      .querySelector('.food-category')
      .contains(document.querySelector('.category-filter'));

    //? ****** START: AGREGAR CLASE ACTIVE ****************
    let currentCardItem = document.getElementsByClassName(
      'active__card-category'
    );
    // Add and Remove Active Class Category
    removeActiveCategoryClass(currentCardItem);
    addActiveCategoryClass(this, currentCardItem);
    //? ****** END: AGREGAR CLASE ACTIVE ******************

    //* Verifica si el elemento seleccionado es el mismo que se selecciono anteriormente
    if (isDifferentCategory && isFilterCategoryExists) {
      document.querySelector('.category-filter').innerHTML = '';
      previousCategoryValue = category;

      //* Renderiza las Cards con los datos del Array "categoryResult"
      renderCards(categoryResult, categoryCardResultElement);

      //* Remueve los eventos existente a todos los Elementos, para que no se acumule los eventos que se agregaran con la Funcion "addProducts"
      removeEventListeners(products, 'click', addOneProduct);
      addProducts(products);
    }

    //* Verifica si NO existe el elemento con la clase '.category-filter'
    if (!isFilterCategoryExists) {
      previousCategoryValue = category;
      categoryCardResultElement.classList.add('row');
      categoryCardResultElement.classList.add('row-cols-1');
      categoryCardResultElement.classList.add('row-cols-md-3');
      categoryCardResultElement.classList.add('g-4');
      categoryCardResultElement.classList.add('mt-4');
      categoryCardResultElement.classList.add('category-filter');
      parentCategoryCard.insertAdjacentElement(
        'afterend',
        categoryCardResultElement
      );

      //* Renderiza las Cards con los datos del Array "categoryResult"
      renderCards(categoryResult, categoryCardResultElement);

      //* Remueve los eventos existente a todos los Elementos, para que no se acumule los eventos que se agregaran con la Funcion "addProducts"
      removeEventListeners(products, 'click', addOneProduct);
      addProducts(products);
    }
  });
});

function addActiveCategoryClass(currentContainer, currentElement) {
  // Card-Container
  currentContainer.classList.add('active__card-category');
  // Card-Body
  currentElement[0]?.children[0].classList.add('active__card-category-body');
}
function removeActiveCategoryClass(currentElement) {
  // Card-Body
  currentElement[0]?.children[0].classList.remove('active__card-category-body');
  // Card-Container
  currentElement[0]?.classList.remove('active__card-category');
}

//? ******** SECCION - COMPRA - ******************************************
//* 📝 Funcion para agregar los productos al Array del Carrito
function addProducts(products) {
  Array.from(products).forEach(function (btn) {
    btn.addEventListener('click', addOneProduct);
  });
}

function addOneProduct() {
  let currentProductId = this.getAttribute('data-id');
  let currentProduct = findProductById(currentProductId);
  addToCart(currentProduct, 1);
}

function removeEventListeners(element, eventType, anyFunction) {
  Array.from(element).forEach(function (btn) {
    btn.removeEventListener(eventType, anyFunction);
  });
}

function findProductById(id) {
  return productsData.find(product => product.id === Number(id));
}
