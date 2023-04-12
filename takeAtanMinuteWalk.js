// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App
// on their phones -- everytime you press the button
// it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction)
// and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you
// will take you exactly ten minutes (you don't want to be early or late!) and will,
// of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing
// a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).


function isValidWalk(walk) {
    if (walk.join('').length !== 10) return false

    ///arrX  n,s,n,n,n,s
    ///arrY  w,e,w,e,e,e,w,w

    ///arrX  +1,-1,+1,+1,+1,-1  // = 2
    ///arrY  +1,-1,+1,-1,-1,-1,+1,+1 // = 3

    //x =2, y =3 !== 0

    // return true if x === 0 && y ===0


    const wayX = walk.filter((item) => item === "n" || item === "s");
    const wayY = walk.filter((item) => item === "w" || item === "e");

    const wayXNum = wayX.map((item) => {
        if (item === "n") return 1
        if (item === "s") return -1
    });
    const wayYNum = wayY.map((item) => {
        if (item === "e") return 1
        if (item === "w") return -1
    });
    const x = wayXNum.reduce((c, p) => c + p, 0)
    const y = wayYNum.reduce((c, p) => c + p, 0)

    return x === 0 && y === 0
}


isValidWalk(['w', 'e', 'n', 'w', 'e', 'w', 'e', 's', 's', 'w', 'e', 'w', 'e'])

//function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
//
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
//
//   return dt === 10 && dx === 0 && dy === 0
// }


//function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

// function isValidWalk(walk) {
//     return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
// }