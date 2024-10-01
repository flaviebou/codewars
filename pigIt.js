function pigIt(str){
  var array=str.split(" ");
  return array.map(function pigItWord(word){if(word=="!"|word=="?"){return word}else{return word.slice(1)+word.charAt(0)+"ay" }}).join(" ")
}
