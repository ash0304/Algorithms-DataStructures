// Write a function which takes in a string and returns counts of each character in the string
// charCount('aaaa') // {a:4}
// charCount('hello') // {h:1, e: 1, l:2, o:1}

function charCount(str) {
  // make object to return at end
  let result = {};

  // loop over string, for each character
  for (let char of str) {
    let charL = char.toLowerCase();
    // check character is a-z 0-9
    if (/[a-z0-9]/.test(charL)) {
      result[charL] = ++result[charL] || 1;
    }
  }

  return result;
}

let result = charCount('Hello!');
console.log(result);
