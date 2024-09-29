function persistence(num) {
   var str=num.toString();
   var x=str.length;
   var count =0;
   while (x>1){
     var y=1;
     for(var i=0;i<x;i++){
       y*=str[i];
     }
       str=y.toString();
       x=str.length;
       count+=1;
     }
    return count
}
