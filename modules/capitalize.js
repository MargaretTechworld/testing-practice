function capitalize(words){
  let firstWords = words.substring(0,1).toUpperCase();
  let remainingWord =words.substring(1,words.length);
  let fullwords = firstWords + remainingWord;
  return fullwords;
}

module.exports = capitalize;