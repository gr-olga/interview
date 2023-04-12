//Write a function that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


function validParentheses(parens) {
    let stack = [];

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            stack.push(parens[i]);
        } else if (parens[i] === ")") {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return(stack.length === 0)
}

validParentheses(")(()))" )


//function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
//
//   return n == 0;
// }


//function validParentheses(parens){
//   var indent = 0;
//
//   for (var i = 0 ; i < parens.length && indent >= 0; i++) {
//     indent += (parens[i] == '(') ? 1 : -1;
//   }
//
//   return (indent == 0);
// }


//function validParentheses(parens){
//   var re = /\(\)/;
//   while (re.test(parens)) parens = parens.replace(re, "");
//   return !parens;
// }