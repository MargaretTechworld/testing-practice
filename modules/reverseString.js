const reverseString = (words) => {
let reverse = "";
for(let i= words.length-1;  i>= 0; i--){
  reverse += words[i];
}
return reverse;
}

module.exports = reverseString;

// function reverseString(string) {
//    return string.split("").reverse().join("");
//   }
//   module.exports = reverseString;