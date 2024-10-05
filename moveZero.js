function moveZeros(arr) {
var result = arr;
var resultzero=[];
    while (result.indexOf(0)>-1){
        result.splice(result.indexOf(0),1);
        resultzero.push(0);
    }
    return result.concat(resultzero)
}
