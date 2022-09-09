'use strict';
import { pizzaList } from '/js/bd.js';
import './shoppingCart.js';

// console.log(pizzaList);

//*------------_______ ✨ DATOS ✨ _______------------
let cardContainer = document.querySelector('#card-container');

//*------------_______ ✨ FUNCION AUTO-EJECUION ✨ _______------------

//* Setear datos al Local Storage
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
};

init();

//*------------_______ ✨ FUNCIONES ✨ _______------------

function renderCards(array) {
  for (const element of array) {
    let templateCard = `
    <div class="col-9 mx-auto col-sm-6 col-md-4 col-lg-3 card-container">
      <div class="card h-100 card-container__info">
        <img src="${element.img}" class="card-img-top card-container__img" alt="${element.nombre}" height="165">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">This is a longer card .</p>
          <div class="row">
              <div class="col-6 col-md-6 h4 my-auto d-flex justify-content-start">
                <strong>$350</strong>
              </div>
              <div class="col-6 col-md-6 d-flex justify-content-end">
                <button class="btn btn-primary">Agregar</button>
              </div>
            </div>
        </div>
      </div>
    </div>`;

    cardContainer.insertAdjacentHTML('beforeend', templateCard);
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
