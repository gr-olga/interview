//Написать функцию фибоначчи. Например fibonacci(5) выводит массив [0, 1, 1, 2, 3]
//Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21


// const Fibonacci = (n) => {
//     let arr = []
//     let sum = 0
//     for (let i = 0; i <= n; ++i) {
//         console.log('i', i)
//         if (2 > i > 0) {
//             sum = sum + i
//         }
//         if (i > 2) {
//             sum = sum + (i - 2)
//         }
//         console.log('sum', sum)
//         arr = [...arr, sum]
//     }
//
//     console.log(arr)
// }
const Fibonacci = (n) => {
    let arr = [0, 1];
    for (let i = 2; i <= n; ++i) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(Fibonacci(5)); // Outputs: [0, 1, 1, 2, 3, 5]

