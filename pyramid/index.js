// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    const hashes = new Array(2 * i + 1).fill("#").join("");
    const spaces = new Array(n - (i + 1)).fill(" ").join("");
    console.log(`${spaces}${hashes}${spaces}`);
  }
}

module.exports = pyramid;

// Solution #2
//
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// Solution #3
//
// function pyramid(n, row = 0, level = "") {
//   if (n === row) {
//     return;
//   }
//
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   let add;
//
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = "#";
//   } else {
//     add = " ";
//   }
//
//   pyramid(n, row, level + add);
// }
