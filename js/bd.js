let dinamicId = 0;

function idGenerator() {
  return dinamicId++;
}

export const productsData = [
  {
    id: idGenerator(),
    name: 'La Mr. pit',
    price: 350,
    description: 'Solo para expertos',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-1.png',
  },
  {
    id: idGenerator(),
    name: "¡Q'Jamone",
    price: 350,
    description: 'C/jamón crudo',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-2.png',
  },
  {
    id: idGenerator(),
    name: 'La Charly Garcia',
    price: 380,
    description: '¡BASTA!',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-3.png',
  },

  {
    id: idGenerator(),
    name: 'La Maradona',
    price: 450,
    description: 'Viene con coca',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-4.png',
  },
  {
    id: idGenerator(),
    name: 'La Julian Alvarez',
    price: 990,
    description: 'Cuidado que pica',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-5.png',
  },
  {
    id: idGenerator(),
    name: 'La Husbulla',
    price: 650,
    description: 'En honor al 1',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-6.png',
  },
  {
    id: idGenerator(),
    name: 'Nick gi',
    price: 689,
    description: 'La que desaparece',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-7.png',
  },
  {
    id: idGenerator(),
    name: 'Calabresa',
    price: 785,
    description: 'C/longaniza',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-8.jpg',
  },
  {
    id: idGenerator(),
    name: 'La Clasica',
    price: 450,
    description: 'Muzzarella',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-9.jpg',
  },
  {
    id: idGenerator(),
    name: 'La Napo',
    price: 650,
    description: 'Clasica Napoletana',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-10.jpg',
  },
  {
    id: idGenerator(),
    name: 'Jamon y Morron',
    price: 450,
    description: 'No falla nunca',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-11.jpg',
  },
  {
    id: idGenerator(),
    name: '4 Quesos',
    price: 900,
    description: 'Para mas placer',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-12.jpg',
  },
  {
    id: idGenerator(),
    name: 'Mr Cebolla',
    price: 830,
    description: 'Fugazzeta',
    category: 'pizza',
    cardImg: './assets/img-foods/pizza-13.jpg',
  },
  {
    id: idGenerator(),
    name: 'Pepinoburguer',
    price: 1100,
    description: 'C/rodajas de pepino',
    category: 'burguer',
    cardImg: './assets/img-foods/burguer-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'Nucbarguer',
    price: 556,
    description: 'Especialidad de la casa',
    category: 'burguer',
    cardImg: './assets/img-foods/burguer-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'La Sana',
    price: 689,
    description: 'Con un poco de verde',
    category: 'burguer',
    cardImg: './assets/img-foods/burguer-3.jpg',
  },
  {
    id: idGenerator(),
    name: 'Colesterol',
    price: 456,
    description: 'Una bomba',
    category: 'burguer',
    cardImg: './assets/img-foods/burguer-4.jpg',
  },
  {
    id: idGenerator(),
    name: 'La Mantequita',
    price: 4.89,
    description: 'No te vas a arrepentir',
    category: 'burguer',
    cardImg: './assets/img-foods/burguer-5.jpg',
  },
  {
    id: idGenerator(),
    name: 'Encebollada',
    price: 900,
    description: 'C/Cebolla caramelizada',
    category: 'fritas',
    cardImg: './assets/img-foods/fritas-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'Fritas Nucba',
    price: 400,
    description: 'C/Cheddar y verdeo',
    category: 'fritas',
    cardImg: './assets/img-foods/fritas-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'Fritas Nucba Vip',
    price: 800,
    description: 'C/Cheddar,verdeo y Bacon',
    category: 'fritas',
    cardImg: './assets/img-foods/fritas-3.jpg',
  },
  {
    id: idGenerator(),
    name: 'Fritas Clasicas',
    price: 300,
    description: 'Fritas simples',
    category: 'fritas',
    cardImg: './assets/img-foods/fritas-4.jpg',
  },
  {
    id: idGenerator(),
    name: 'A La Provenzale',
    price: 600,
    description: 'Fritas c/provenzal',
    category: 'fritas',
    cardImg: './assets/img-foods/fritas-5.jpg',
  },
  {
    id: idGenerator(),
    name: 'El Solitario',
    price: 420,
    description: 'Pizza Para 1',
    category: 'individuales',
    cardImg: './assets/img-foods/individual-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'individualista',
    price: 250,
    description: 'Pizza primavera P/1',
    category: 'individuales',
    cardImg: './assets/img-foods/individual-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'Pizza Margarita',
    price: 271,
    description: 'P/1',
    category: 'individuales',
    cardImg: './assets/img-foods/individual-3.jpg',
  },
  {
    id: idGenerator(),
    name: 'La Scalabrini Ortiz',
    price: 300,
    description: 'Pizza calabresa p/1',
    category: 'individuales',
    cardImg: './assets/img-foods/individual-4.png',
  },
  {
    id: idGenerator(),
    name: 'Burrito de pollo y verduras',
    price: 600,
    description: 'Para los que estan a dieta',
    category: 'wrap',
    cardImg: './assets/img-foods/wrap-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'Burrito Vegan',
    price: 500,
    description: 'Solo vegetales',
    category: 'wrap',
    cardImg: './assets/img-foods/wrap-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'Burrito Proteico',
    price: 112,
    description: 'Jamon y huevo revuelto',
    category: 'wrap',
    cardImg: './assets/img-foods/wrap-3.jpg',
  },
  {
    id: idGenerator(),
    name: 'Burrito Ortega',
    price: 600,
    description: 'muzza y bacon',
    category: 'wrap',
    cardImg: './assets/img-foods/wrap-4.jpg',
  },
  {
    id: idGenerator(),
    name: 'El Chavo del 8',
    price: 76,
    description: 'Clasico Taco Mexicano',
    category: 'mexican-food',
    cardImg: './assets/img-foods/mexico-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'El Chicharito Hernandez',
    price: 865,
    description: 'Taco Picante',
    category: 'mexican-food',
    cardImg: './assets/img-foods/mexico-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'Mariachi',
    price: 929,
    description: 'Picada de mini tacos',
    category: 'mexican-food',
    cardImg: './assets/img-foods/mexico-3.jpg',
  },
  {
    id: idGenerator(),
    name: 'Enchilada',
    price: 827,
    description: 'De pollo',
    category: 'mexican-food',
    cardImg: './assets/img-foods/mexico-4.jpeg',
  },
  {
    id: idGenerator(),
    name: 'Ferno',
    price: 555,
    description: 'Fernet con coca',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-1.jpg',
  },
  {
    id: idGenerator(),
    name: 'sprite',
    price: 146,
    description: 'Lata 350ml',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-2.jpg',
  },
  {
    id: idGenerator(),
    name: 'Cocucha',
    price: 5.55,
    description: 'Lata 354ml',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-3.jpg',
  },
  {
    id: idGenerator(),
    name: '¡Que pinta!',
    price: 746,
    description: 'Pinta de cerveza artesanal',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-4.jpg',
  },
  {
    id: idGenerator(),
    name: 'La fresa',
    price: 5.55,
    description: 'Daikiri de frutilla',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-5.jpg',
  },
  {
    id: idGenerator(),
    name: 'Mery gin',
    price: 7.46,
    description: 'Gin tonic de lima',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-6.jpg',
  },
  {
    id: idGenerator(),
    name: 'Gancia',
    price: 546,
    description: 'C/sprite y limon',
    category: 'bebida',
    cardImg: './assets/img-foods/bebida-7.jpg',
  },
];
