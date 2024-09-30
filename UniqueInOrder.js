var uniqueInOrder=function(iterable){
  var result=[];
  for(var x=0;x<iterable.length;x++){
    if(iterable[x]!=result[result.length-1]){
      result.push(iterable[x])
    }
  }
  return result
  }

