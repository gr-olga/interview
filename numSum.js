//Условие: Дан массив целых чисел nums и целое число target.
// Найдите два числа в массиве, которые в сумме дают target,
// и верните их индексы. Вы можете предположить,
// что каждый входной массив будет иметь ровно одно решение,
// и вы не можете использовать один и тот же элемент дважды.
//
// Пример:
// Вход: nums = [2, 7, 11, 15], target = 9
// Выход: [0, 1]
// Объяснение: Так как nums[0] + nums[1] == 9, вернем [0, 1].


const findSum = (arr, target) => {
    // first solution for only one result, with close state arr items
    // let curItem = arr[0]
    // let curIndex = 0
    // let res
    // for (let i = 1; i <= arr.length - 1; ++i) {
    //     // console.log(i)
    //     if (target === curItem + arr[i]) {
    //         res = [curIndex, i]
    //     } else {
    //         curIndex = i
    //         // console.log('arr[i]', arr[i])
    //         curItem = arr[i]
    //     }
    // }
    // if (curItem === arr[arr.length - 1]) return 1
    // console.log(res)

    for (let j = arr.length; j >= 0; j--)
        for (let i = 1; i <= arr.length - 1; ++i) {

            if (target === arr[j] + arr[i]) {
               return  console.log(j, i)
            }
        }
}

findSum([1, 2, 4, 7, 11, 15], 8)