// console.log('SCRIPT _ Corriendo');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

/**
 * Funcion que devuelve un array con 3 elementos no repetidos
 *
 * @param {any[]} arr
 * @return {any[]}
 */
function randomRecommendation(arr) {
  let arrRecomendation = new Set();

  while (arrRecomendation.size < 3) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    const element = arr.at(randomNumber);
    arrRecomendation.add(element);
  }

  //* Devuelve 3 elementos no repetidos
  return arrRecomendation;
}

export { randomRecommendation };
