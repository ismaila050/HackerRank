/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    tableau = [];
    for(var i=0;i < arr.length;i++){
        tableau[i] = fn(arr[i]);
    }
    return  tableau;
};
fn = function incrementer (n){
    return n + 1;
}

var monTableau = [1,2,4];
var resultat = map(monTableau,fn);
console.log(resultat);