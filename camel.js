// String.prototype.toJadenCase = function () {
//     console.log("string");
// };

function jadenCase(str) {
    const newList = str.split(" ")
    // console.log(newList);
    const up = newList.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    })
    return up.join("")
}

 console.log(jadenCase("How can mirrors be real if our eyes aren't real"))