//Let's create a function that counts down from a given number and output to console in each iteration.
// for loop isn't allowed, use recursion
// countDownFrom(5);
// 5
// 4
// 3
// 2
// 1

function counts(x) {
    if (x <= 0) {
        return
    }
    console.log(x)
    counts(x - 1)
}

counts(7)
