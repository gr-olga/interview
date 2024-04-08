// 3. Функция find.
//     Реализовать функцию find. Одноимённую функцию массива использовать нельзя.
//     Функция принимает строку, которую надо найти, и массив строк, например:
// find('c', ['a', 'b', 'c', 'd'])
// Функция должна вернуть число, позицию искомого элемента в массиве, либо -1 если такого элемента нет.


const find = (el, arr) => {
    let counter = arr.length
    for (let i = 0; i <= arr.length; i++) {
        console.log('counter',counter)
        if (arr[i] === el)
            return console.log(arr[i], i)
        else counter -= 1
    }
    console.log(counter)
}
find('s', ['a', 'b', 'c', 'd','g','e', 'o'])