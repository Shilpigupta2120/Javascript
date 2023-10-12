function reverseWords(sentence) {
  var words = sentence.split(" ");
  var reversed = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = "";

    for (var j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
    }

    reversed.push(reversedWord);
  }

  return reversed.join(" ");
}
