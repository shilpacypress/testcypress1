/* for(let i=0;i<10;i++)
{
console.log(i);
}*/

  // .........................................................
/* count letter occurance
........................


 function countLetters(str) {
  var letterCount = {};
  
  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      // Update the letter count
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  
  return letterCount;
}

console.log(countLetters("kkljasdasdad")) */


// -----------------------------------------------

let x = "my name is shilpa";
let y="";
for(let i=0;i<x.length-1;i--)
{
  y=y+x[i];

}
console.log(y);




