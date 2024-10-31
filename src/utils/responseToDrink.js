const responseToDrink = (response) => {
  const drinkData = response.drinks[0];
  const newDrink = {
    idDrink: drinkData.idDrink,
    name: drinkData.strDrink,
    instructions: drinkData.strInstructions,
    urlImage: drinkData.strDrinkThumb,
    ingredients: [],
    ingmeasures: [],
  };
  let i = 1;
  let nroIngredient = "strIngredient" + i;
  let nroIngMeasure = "strMeasure" + i;
  while (drinkData[nroIngredient] != null) {
    newDrink.ingredients.push(drinkData[nroIngredient]);
    newDrink.ingmeasures.push(drinkData[nroIngMeasure]);
    i++;
    nroIngredient = "strIngredient" + i;
    nroIngMeasure = "strMeasure" + i;
  }
  return newDrink;
};

export default responseToDrink;
