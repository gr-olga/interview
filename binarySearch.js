function BinarySearch(arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] > target) high = mid - 1
        else low = mid + 1
        // arr[mid] > target ? high = mid - 1 : low = mid + 1;
    }
    return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))