// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
// of the strings of a1 which are substrings of strings of a2.
//
//     Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {
    let resArr = []
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array2[i].includes(array1[j]) && !resArr.includes(array1[j])) {
                resArr.push(array1[j])
            }
        }
    }
    return resArr.sort()
}

// function inArray(array1, array2) {
//     console.log(array1);
//     const res = array2.filter((item, i, resArr) => {
//         if (item.includes(array1[i]))
//             console.log(resArr);
//         return resArr.unshift(array1[i])
//     })
// }

const res = inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])
const res = inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])

console.log(res);
//function inArray(array1,array2){
//   return array1.filter( e => array2.join(' ').includes(e) ).sort();
// }

// function inArray(arr1, arr2) {
//     return arr1.filter(str => arr2.some(str2 => str2.includes(str))).sort();
// }