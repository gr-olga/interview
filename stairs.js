// 3. Нарисовать лесенку.
//     Функция принимает число, например:
// staircase(6)
// Должна выводить "лесенку" их символов #, где переданное число - число этажей.
//     Например staircase(6) выведет
// _____#
// ____##
// ___###
// __####
// _#####
// ######

const stairsMaker = (n) => {
    // let string
    // for (let j = n; j >= 0; j--) {
    //     string = ''
    //     for (let i = 0; i <= n; i++) {
    //         if (i < j) {
    //             string += '_'
    //         } else string += '#'
    //     }
    //     console.log(string)
    // }


    for (let j = n-1; j >= 0; j--) {
        let string = '_'.repeat(j) + '#'.repeat(n - j);
        console.log(string);
    }
}

stairsMaker(6)