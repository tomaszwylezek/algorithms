// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(string) {
  return string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// Solution #2

// function buildCharMap(string) {
//   const charMap = {};
//
//   string
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .forEach(value => {
//       charMap[value] = charMap[value] + 1 || 1;
//     });
//
//   return charMap;
// }
//
// function anagrams(stringA, stringB) {
//   const stringAMap = buildCharMap(stringA);
//   const stringBMap = buildCharMap(stringB);
//
//   return (
//     Object.keys(stringAMap).length === Object.keys(stringBMap).length &&
//     Object.keys(stringBMap).every(value => {
//       return stringAMap[value] === stringBMap[value];
//     })
//   );
// }
