//ce fonction permet de décomposer un chiffre en unité , dizaine et centaine

var Unite = {
    0 : "zero",
    1 : "un",
    2 : "deux",
    3 : "trois",
    4 : "quatre",
    5 : "cinq",
    6 : "six",
    7 : "sept",
    8 : "huit",
    9 : "neuf"
};
var Dizaine = {
    1 : "?",
    2 : "vingt",
    3 : "trente",
    4 : "quarante",
    5 : "cinquante",
    6 : "soixante",
    7 : "?",
    8 : "quatre-vingt",
    9 : "?"
};
function  decomposerChiffre(){
    //var chiffre = prompt("donner un chiffre ");
    chiffre = "21"
    number = parseInt(chiffre);
    var unites = number % 10;
    var dizaines = Math.floor((number / 10) % 10  );
    var centaines = Math.floor((number / 100) % 10);
    console.log(number + " : " + centaines + " centaines " + dizaines + " dizaines " + unites + " unites ");
    console.log("*******Traduction*******")
    if(dizaines === 0 && centaines === 0){
        afficherUnite(number,unites);
    }
    else if(centaines === 0){
        afficherDizaineUnite(number,dizaines,unites);
    }
}
decomposerChiffre();
function afficherUnite(nombre,unite){
    console.log(nombre + ": " + Unite[unite.toString()]);

}
function afficherDizaineUnite(nombre,dizaine,unite){
    console.log(nombre + " : " + Dizaine[dizaine.toString()] + "-" + Unite[unite.toString()])
}

function  afficherUniteDizaineCentaine(){

}
