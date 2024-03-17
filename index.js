function isPalindrome(word) {
  // Write your algorithm here
  let reversedWors='';
  for (let i = word.length - 1; i >= 0; i --) {
   reversedWors+= word[i];
    
  }
  return word === reversedWors;
}


if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;




