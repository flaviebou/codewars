decodeMorse = function(morseCode){
  decodeMorseletter = function(letter){
    return MORSE_CODE[letter]
  }
  decodeMorseword = function(word){ 
    return word.split(" ").map(decodeMorseletter).join("")
  }
  return morseCode.trim().split("  ").map(decodeMorseword).join(" ")
}
