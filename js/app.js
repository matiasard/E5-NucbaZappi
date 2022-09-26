'use strict';
import { productsData } from '/js/bd.js';
import { cart as cartShop, addToCart, totalQuantity } from './shoppingCart.js';
import { randomElement } from './util.js';

// console.log(productsData);

//*------------_______ ✨ DATOS ✨ _______------------
let cardContainer = document.querySelector('#card-container');
let cardRecomendacion = document.querySelector('#card-recomendacion-container');

let cardCategortyContainer = document.querySelectorAll(
  '.card-category__container'
);
let parentCategoryCard = document.querySelector('.category-container');
let resultCategoryCard = document.createElement('div');
let previousCategoryValue = '';

//*------------_______ ✨ FUNCION AUTO-EJECUION ✨ _______------------

//* Setear datos al Local Storage
/**
 * Guarda un array al Local Storage
 *
 * @param {array} cartList
 */
const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

const init = () => {
  saveLocalStorage(productsData);

  //* Obtener datos del Local Storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);

  //* Display Cards
  renderCards(randomElement(cart, 8), cardContainer);
  renderRecommendationCards(randomElement(cart, 3), cardRecomendacion);
  // randomElement2(cart, 3);

  //* Shopping Cart TEST 👇
  addToCart('Pan', 4);
  addToCart('Carne', 5);
  addToCart('Queso', 2);
  console.log(cartShop);
  console.log(`Cantidad Total de Productos: ${totalQuantity(cartShop)}`);

  // console.log(randomElement(cart));
  // randomElement(cart).forEach(el => console.log(el));
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
                <button class="btn btn-primary card-container__btn"
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
        <button class="btn btn-primary w-100">Agregar</button>
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
    //* Obtener el valor del atributo "data-category"
    const category = this.getAttribute('data-category');

    //* Array con los resultados de la categoria seleccionada
    let categoryResult = productsData.filter(
      food => food.category === category
    );

    let isFilterCategoryExists = document
      .querySelector('.food-category')
      .contains(document.querySelector('.category-filter'));

    let isDifferentCategory = previousCategoryValue !== category;

    //? ****** START: AGREGAR CLASE ACTIVE ****************
    let currentCardItem = document.getElementsByClassName(
      'active__card-category'
    );
    // Add and Remove Active Class Category
    removeActiveCategoryClass(currentCardItem);
    addActiveCategoryClass(this, currentCardItem);
    //? ****** END: AGREGAR CLASE ACTIVE ******************

    //* Verifica si existe el elemento con la clase '.category-filter'
    if (isFilterCategoryExists) {
      //* Verifica si el elemento seleccionado es el mismo que se selecciono anteriormente
      if (isDifferentCategory) {
        document.querySelector('.category-filter').innerHTML = '';
        previousCategoryValue = category;

        //* Renderiza las Cards con los datos del Array "categoryResult" dentro del elemento "resultCategoryCard"
        renderCards(categoryResult, resultCategoryCard);
      }
    } else {
      previousCategoryValue = category;
      resultCategoryCard.classList.add('row');
      resultCategoryCard.classList.add('row-cols-1');
      resultCategoryCard.classList.add('row-cols-md-3');
      resultCategoryCard.classList.add('g-4');
      resultCategoryCard.classList.add('mt-4');
      resultCategoryCard.classList.add('category-filter');
      parentCategoryCard.insertAdjacentElement('afterend', resultCategoryCard);

      //* Renderiza las Cards con los datos del Array "categoryResult" dentro del elemento "resultCategoryCard"
      renderCards(categoryResult, resultCategoryCard);
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

// Nos devolverá que <app-element> es de tipo HTMLElement
// const appElement = document.querySelector('app-element');
// console.log('appElement: ', appElement, appElement.constructor.name);

// class AppElement extends HTMLElement {
//   constructor() {
//     super();
//     console.log('Inicializado...');
//   }
// }

// customElements.define('app-element', AppElement);
// console.log('appElement: ', appElement, appElement.constructor.name);

// const template = document.createElement('template');
// template.innerHTML = `
//   <style>
//     * {
//       font-size: 200%;
//     }

//     span {
//       width: 4rem;
//       display: inline-block;
//       text-align: center;
//     }

//     button {
//       width: 4rem;
//       height: 4rem;
//       border: none;
//       border-radius: 10px;
//       background-color: seagreen;
//       color: white;
//     }
//   </style>
//   <button id="dec">-</button>
//   <span id="count"></span>
//   <button id="inc">+</button>`;

// class MyCounter extends HTMLElement {
//   constructor() {
//     super();
//     this.count = 0;
//     this.attachShadow({ mode: 'open' });
//   }

//   connectedCallback() {
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//     this.shadowRoot.getElementById('inc').onclick = () => this.inc();
//     this.shadowRoot.getElementById('dec').onclick = () => this.dec();
//     this.update(this.count);
//   }

//   inc() {
//     this.update(++this.count);
//   }

//   dec() {
//     this.update(--this.count);
//   }

//   update(count) {
//     this.shadowRoot.getElementById('count').innerHTML = count;
//   }
// }

// customElements.define('my-counter', MyCounter);
