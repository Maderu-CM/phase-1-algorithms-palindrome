function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedWord === cleanedWord.split('').reverse().join('');
}
const word1 = "abba";
const word2 = "robot";
const word3 = "racecar";
const word4 = "ab";
const word5 = "a";
console.log(isPalindrome(word1)); 
console.log(isPalindrome(word2));
console.log(isPalindrome(word3)); 
console.log(isPalindrome(word4));
console.log(isPalindrome(word5)); 

/*
  The isPalindrome function takes a word as input, converts it to lowercase, removes non-alphanumeric characters, and then checks if the cleaned word is the same when read forwards and backwards. If it is, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
  //console.log("=>", isPalindrome("racecar"));

  //console.log("");

  //console.log("Expecting: false");
  //console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
