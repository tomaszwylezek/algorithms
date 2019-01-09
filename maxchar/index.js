// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  str.split("").forEach(char => {
    charMap[char] = charMap[char]++ || 1;
  });

  let mostChars;

  Object.keys(charMap).forEach(char => {
    if (charMap[char] > (charMap[mostChars] || 0)) {
      mostChars = char;
    }
  });

  return mostChars;
}

module.exports = maxChar;
