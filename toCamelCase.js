function toCamelCase(str){
  if(str==""){
    return "";
  }
  else{
    result=str.split(/[-_]/); //returns array with elements of str splits with - or _ dividers
    finalResult=result[0]; //the first element has to be the same 
    for (x=1;x<result.length;x++){
      finalResult+=result[x].charAt(0).toUpperCase() + result[x].slice(1); //identify the first letter of the word and capitalize it then add rest of the string
    }
    return finalResult
    }
}
