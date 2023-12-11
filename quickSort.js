function QuickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return QuickSort(left).concat(pivot, QuickSort(right))
}

console.log(QuickSort([4, 800, 2, 1, 5, 7, 6, 3]))