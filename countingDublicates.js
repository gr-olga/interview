// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let charMap = {};
    const lowerCaseText = text.toLowerCase();
    let count = 0
    for (let char of lowerCaseText) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let key in charMap) {
        if (charMap[key] > 1) {
            count++;
        }
    }
    return count;
}

console.log(duplicateCount("ABBA"))

// function duplicateCount(text) {
//     var lowerCaseText = text.toLowerCase();
//     var charMap = {};
//     var count = 0;
//
//     for (var i = 0; i < lowerCaseText.length; i++) {
//         var char = lowerCaseText[i];
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//
//     for (var char in charMap) {
//         if (charMap.hasOwnProperty(char) && charMap[char] > 1) {
//             count++;
//         }
//     }
//
//     return count;
// }
//  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;

// return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;