//ce fonction permet de retourner 2 valeurs en utilisant les objets littéraux
function getCoordonnes(){
    return {
        x:  12,
        y:  14
    };
}
var mesCoordonnees = getCoordonnes();
console.log("coordonnee de x :" + mesCoordonnees['x']);