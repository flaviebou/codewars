function bouncingBall(h,  bounce,  window) {
  if(h<0|bounce<0|bounce>=1|window>=h){
    return -1
  }
  var n=1;
  while (bounce*h>window){
    h*=bounce;
    n+=2;
  }
  return n
}
