//Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths. Can you help him to find out,
// how many cakes he could bake considering his recipes?
//
// Write a function cakes(), which takes the recipe (object)
// and the available ingredients (also an object) and returns the maximum number of
// cakes Pete can bake (integer). For simplicity there are no units for the amounts
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    const recipeKeys = Object.keys(recipe)
    const availableKeys = Object.keys(available)
    if(recipeKeys.length < 0) return 0
    if(availableKeys.length < 0) return 0
    const hasAllIngredients = recipeKeys.every((item) => availableKeys.includes(item))

    if (hasAllIngredients === false) return 0
    const ingridientsArr = recipeKeys.map((name) => {
            const availableValue = available[name]
            const recipeValue = recipe[name]
        if (availableValue < recipeValue) {
            return 0;
        }
            const amount = Math.floor(availableValue / recipeValue);
            return amount
    })

    const res = Math.min(...ingridientsArr);

    return res;
}


// function cakes(recipe, available) {
//     return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
// }


console.log('=====');
// must return 2
const test1 = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
console.log('test1 must return 2', test1, test1 === 2);
console.log('=====');
// must return 0
const test2 = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
console.log('test2 must return 0', test2, test2 === 0);
console.log('=====');
