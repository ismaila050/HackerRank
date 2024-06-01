alert("Ce programme émule le fonctionnement d'une calculatrice");
var choix = 'o'
do {
    var a = prompt("donner un nombre : ");
    var b = prompt("donner un autre nombre : ");
    a = parseInt(a);
    b = parseInt(b) ;
    var option = prompt("quelle opération voulez vous ? (a/s/d/m)")
    switch (option) {
        case "a" :
            alert("addition " + a + b);
            break;
        case "s" :
            alert("soustraction" + a - b);
            break;
        default :
            alert("vous n'avez pas bien choisi")
            break;

    }
    choix = prompt("voulez vous faire une autre opération ?(o/n)")

}while (choix === "o")
