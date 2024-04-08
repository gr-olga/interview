//Написать функцию, выводящую факториал числа (в виде массива)
// факториал: !3 = 1 * 2 * 3 = 6

const factorial = (n) => {
    let acc = 1
    for (let i = 1; i <= n; ++i) {
        acc = acc * i
    }
    return acc
}

factorial(3)

// recursive version:
//const factorial = (n, acc = 1) => {
//     return n <= 1 ? acc : factorial(n - 1, n * acc);
// }