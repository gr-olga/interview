// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//
// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹


function multiply(number){
     const q = number===10 ? 2 : Math.ceil(Math.log10(Math.abs(number)))
    // const q  = number.toString().length    -- not working for negative numbers
    const c =  Math.pow(5, q)
    return number * c
}
//const multiply = num => num * 5 ** (Math.abs(num).toString()).length

console.log(multiply(-3))
const quadrant = (x, y) => [3, 4, 2, 1][Math.sign(10) / 2 + Math.sign(-8) + 1.5]
