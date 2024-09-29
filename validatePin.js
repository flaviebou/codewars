function validatePIN (pin) {
  if(pin.length==4||pin.length==6){
    for(i=0;i<pin.length;i++){
      if(isNaN(pin[i])){
          return false
      }
    } 
    return true
  }
  else{
    return false
  }
} //doesn't work for  pin='123\n'
