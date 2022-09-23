//* Funcion que retorna un array con elementos aleatorios: NO OPTIMIZADO
// function randomRecommendation(arr) {
//   let arrRecomendation = new Set();
//   while (arrRecomendation.size < 3) {
//     let randomNumber = Math.floor(Math.random() * arr.length);
//     const element = arr.at(randomNumber);
//     arrRecomendation.add(element);
//   }
//   return arrRecomendation;
// }

//* Funcion que retorna un array con elementos aleatorios: MEJORADO
/**
 * Retorna un array con la cantidad (randomNumberQuantity) especificado de elementos no repetidos.
 *
 * @param { object[] } arr
 * @param { number } randomNumberQuantity
 * @return { object[] }
 */
function randomElement(arr, randomNumberQuantity) {
  try {
    if (arr.length < randomNumberQuantity)
      throw new Error(
        'La cantidad de elementos random excede el tamaño del array'
      );
    let arrCopy = arr.map(element => element);
    let arrResult = [];
    let max = arrCopy.length - randomNumberQuantity;

    // Rellenando el array con elementos no repetidos
    do {
      // Numeros Random
      let azar = Math.floor(Math.random() * arrCopy.length);

      arrResult.push(arrCopy[azar]);
      arrCopy.splice(azar, 1);
    } while (max < arrCopy.length);

    //* Devuelve la cantidad especificada (randomNumberQuantity) de elementos no repetidos
    return arrResult;
  } catch (error) {
    alert(error);
  }
}

export { randomElement };
