'use strict';
import { pizzaList } from '/js/bd.js';
import { cart as cartShop, addToCart, totalQuantity } from './shoppingCart.js';
import { randomRecommendation } from './script.js';

// console.log(pizzaList);

//*------------_______ ✨ DATOS ✨ _______------------
let cardContainer = document.querySelector('#card-container');
let cardRecomendacion = document.querySelector('#card-recomendacion-container');

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
  saveLocalStorage(pizzaList);

  //* Obtener datos del Local Storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);

  //* Display Cards
  renderCards(cart);
  renderRecommendationCards(randomRecommendation(cart));

  //* Shopping Cart TEST 👇
  addToCart('Pan', 4);
  addToCart('Carne', 5);
  addToCart('Queso', 2);
  console.log(cartShop);
  console.log(`Cantidad Total de Productos: ${totalQuantity(cartShop)}`);

  // console.log(randomRecommendation(cart));
  // randomRecommendation(cart).forEach(el => console.log(el));
};

init();

//*------------_______ ✨ FUNCIONES ✨ _______------------

function renderCards(array) {
  for (const element of array) {
    let templateCard = `
    <div class="col-12 mx-auto col-sm-6 col-md-4 col-lg-3 card-container">
      <div class="card h-100 card-container__info">
        <img src="${element.img}" class="card-img-top card-container__img" alt="${element.nombre}" height="165">
        <div class="card-body">
          <h5 class="card-title fw-normal">${element.nombre}</h5>
          <p class="card-text text-muted">This is a longer card.</p>
          <div class="row">
              <div class="col-6 col-md-6 my-auto d-flex justify-content-start">
                <span class="card-container__body-price">$${element.precio}</span>
              </div>
              <div class="col-6 col-md-6 d-flex justify-content-end">
                <button class="btn btn-primary card-container__btn">Agregar</button>
              </div>
            </div>
        </div>
      </div>
    </div>`;

    cardContainer.insertAdjacentHTML('beforeend', templateCard);
  }
}

function renderRecommendationCards(foods) {
  for (const food of foods) {
    let templateRecommendation = `
  <div class="card mb-3 mx-auto card-recomendacion">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-md-3 pt-3 pt-md-0">
        <img
          src="${food.img}"
          height="60";
          class="img-fluid card-recomendacion__img" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title card-recomendacion__title">${food.nombre}</h5>
          <p class="card-text text-muted mb-1">${food.descripcion}</p>
          <p class="mb-0 card-recomendacion__price">$${food.precio}</p>
        </div>
      </div>
      <div class="col-md-3 pb-3">
        <button class="btn btn-primary w-100">Agregar</button>
      </div>
    </div>
  </div>`;

    cardRecomendacion.insertAdjacentHTML('beforeend', templateRecommendation);
  }
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
