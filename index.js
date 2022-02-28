function isPalindrome(word) {
  // iterate from the beginning to the middle of the word
  // racecar is 7 characters. 7/2 = 3.5 (<-- odd number length of word, so we need to consider how to compare the middle character)
  // aaaaaa is 6 characters. 6/2 = 3
  for (let i = 0; i < word.length / 2; i++) {
    // check each character to the corresponding letter from the end
    const j = word.length - 1 - i;
    console.log(`i --> ${word[i]} ${word[j]} <-- j`);

    // if any of the letters don't match, return false
    if (word[j] !== word[i]) return false;
  }

  // return true
  return true;
}

/* 
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
 i        j

r a c e c a r
    i   j

r a c e c a r 
      ij


Add your pseudocode here:

  iterate from the beginning to the middle of the word
    check each character to the corresponding letter from the end
      if any of the letters don't match, return false

  return true
  
*/

/*
  Add written explanation of your solution here:

  The algorithm will first create a variable to contain the reversed string.
  Then it will split the passed in string using split(),
  then it will reverse the split string using reverse(),
  then it will join the split/reversed string back together,
  then it will store this result in the new variable we created at the top of the function.
  
  The function will then have a return statement wherein the new string will be compared to the passed in string, returning true or false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("'racecar' =>", isPalindrome("racecar"));
  console.log("'abba' =>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("'robot' =>", isPalindrome("robot"));
  console.log("'encyclopedia' =>", isPalindrome("encyclopedia"));
}

module.exports = isPalindrome;
