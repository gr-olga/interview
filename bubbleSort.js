function BubbleSort(arr) {
    let length = arr.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(BubbleSort([4, 500, 3, 2, 1, 6, 7, 8, 9, 10]))