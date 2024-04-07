//2. Наименьшее положительное число.
// Написать функцию, которая принимает массив, например:
// solution([-10, -1, 1, 3, 2, 1, 4, 5, 150])
// Функция должна вернуть наименьшее положительное число

const mockArr = [10000, -10, -1, 1, 3, 2, 1, 4, -70, 5, 150]
const smallestNumber = (arr) => {
    const arr2 = arr.filter((el) => el >= 0 ? el : null).sort((a, b) => a - b)
    console.log(arr2[arr2.length - 1])
}

smallestNumber(mockArr)