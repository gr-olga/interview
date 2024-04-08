const array1 = [[1, 3], [8, 10], [2, 6], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]
//Объединение интервалов в массиве
function merge(arr) {
    if (arr.length <= 1) return arr;

    arr.sort((a, b) => a[0] - b[0]);

    let curr = arr[0];
    const res = [curr]

    for (let i = 1; i < arr.length; i++) {
        const currRight = curr[1]
        const [nextLeft, nextRight] = arr[i]
        if (currRight >= nextLeft) {
            curr[1] = Math.max(currRight, nextRight)
        } else {
            res.push(arr[i])
            curr = arr[i]
        }
    }
    return res;
}

console.log(merge(array3));
