let dinamicId = 0;

function idGenerator() {
  return dinamicId++;
}

export const pizzaList = [
  {
    id: idGenerator(),
    nombre: 'Pizza Hawaiana',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'rodajas de piña',
      'jamón cocido',
      'queso mozzarella rallado o en polvo',
      'cebolla',
      'Orégano',
    ],
    precio: 450,
    img: 'https://lechatmagazine.com/wp-content/uploads/2021/11/como-hacer-pizza-hawaiana-receta-PORTADA-le-chat-magazine.jpg',
  },
  {
    id: idGenerator(),
    nombre: 'Pizza de Primavera',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'Muzzarella',
      'Tomates en rodajas',
      '2 Huevo duro',
      'Orégano',
      'Aceituna',
    ],
    precio: 670,
    img: 'https://pizzasargentinas.com/wp-content/uploads/2020/10/pizzza-de-primavera-816x459.jpg',
  },
  {
    id: idGenerator(),
    nombre: 'Pizza de Panceta',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'Muzzarella',
      'Panceta',
      'Orégano',
      'Aceituna',
    ],
    precio: 600,
    img: 'https://www.solopizzas.info/wp-content/uploads/2021/01/White-and-Yellow-Simple-Fireworks-Photo-New-Year-Card-12-2.jpg',
  },
  {
    id: idGenerator(),
    nombre: 'Pizza con Huevo Frito',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'Muzzarella',
      '4 Huevo frito',
      'Sal',
      'Orégano',
      'Aceituna de oliva',
    ],
    precio: 500,
    img: 'https://img.cocinarico.es/2021-07/pizza-con-huevos-1.webp',
  },
  {
    id: idGenerator(),
    nombre: 'Pizza de Roquefort',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'Muzzarella',
      'Queso Roquefort',
      'Orégano',
      'Aceituna de oliva',
    ],
    precio: 700,
    img: 'https://pizzasargentinas.com/wp-content/uploads/2020/11/Pizza-de-roquefort-1024x905-1.jpg',
  },
  {
    id: idGenerator(),
    nombre: 'Pizza de Calabresa',
    descripcion: 'description',
    ingredientes: [
      'Salsa de tomate',
      'Muzzarella',
      'Rodajas de Calabresa',
      'Provenzal',
      'Orégano',
      'Aceituna de oliva',
    ],
    precio: 460,
    img: 'https://img.freepik.com/fotos-premium/pizza-calabrese-maiz_538646-5977.jpg?w=1380',
  },
];
