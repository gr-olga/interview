// 1. Написать FuzzBuzz
// Функция принимает массив чисел, например:
// fussBuzz1([1, 3, 5, 4, 4, 7, 9, 15, 25, 30])
// Если число делится на 3, выводим в консоль Fuzz
// Если число делится на 5, выводим в консоль Buzz
// Если число делится и на 3 и на 5, выводим в консоль FuzzBuzz

const mockArr = [1, 3, 5, 4, 4, 7, 9, 15, 25, 30]
const fuzzBuzz = (arr) => {
    // arr.forEach((el) => {
    //     if (el % 5 === 0 && el % 3 === 0) {
    //         return console.log('FuzzBuzz')
    //     }
    //     if (el % 3 === 0) {
    //         return console.log('Fuzz')
    //     }
    //     if (el % 5 === 0) {
    //         return console.log('Buzz')
    //     }
    //     else return console.log(el)
    // })
    const arr2 = arr.map((el) => {
        if (el % 5 === 0 && el % 3 === 0) {
            return 'FuzzBuzz';
        } else if (el % 3 === 0) {
            return 'Fuzz';
        } else if (el % 5 === 0) {
            return 'Buzz';
        } else {
            return el;
        }
    });
    console.log(arr2);
}

 console.time(fuzzBuzz(mockArr))
fuzzBuzz(mockArr)
console.timeEnd(fuzzBuzz(mockArr))

//map method faster?