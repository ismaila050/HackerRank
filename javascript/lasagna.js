var tableau = ["ismaila","sangue","sow","marie"];
var i =0 ;
for(i=0;i<tableau.length;i++)
    console.log(tableau[i]);
var personne = {
    self : 'Ismaila',
    soeur:  'marie ',
    frere:  'moustapha'
};
//parcourir l'objet ?
for (i in personne)
    console.log(personne[i])