// Complete a function called chooseRecipe() 
// will receive three parameters: 
// - An array of ingredients in stock at Bakery A 
// - An array of ingredients in stock at Bakery B 
// - An array of recipe objects. 
// Each recipe has a name property(string) and an ingredient property(array)

//you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

const ingredientCheck = function(bakeryArray, ingredient) {
  for (let ingredients of bakeryArray) {
    if (ingredients === ingredient) {
      return true;
    }
  }
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {


  for (let recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients[0]) || ingredientCheck(bakeryB, recipe.ingredients[0])) {
      if (ingredientCheck(bakeryA, recipe.ingredients[1]) || ingredientCheck(bakeryB, recipe.ingredients[1])) {
      return recipe.name;
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
//Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
//Nima's Famous Dijon Raisins