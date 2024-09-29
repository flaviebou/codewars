function isPangram(string){
  const newString=string.toLowerCase();
  const a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(i=0;i<a.length;i++){
    if(!newString.includes(a[i])){
      console.log(a[i]);
      return false
    }
  }
  return true
}
