function countLetters(input){
  var str = input.toLowerCase().split(" ").join("").split("");
  var count = new Object();
  for(var i = 0; i < str.length; i++){
    if(str[i] in count){
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
}
var sentence = "Hello I sure would like a cup of coffee";
console.log("Here is the number of each letter in your sentence: \n" + sentence)
console.log(countLetters(sentence));