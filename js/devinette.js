console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var nbr_saisie;
var i=0;
while (i != 6){
    nbr_saisie = prompt("entrez un Nombre");
    parseInt(nbr_saisie);

    if (nbr_saisie > solution){
        console.log("Le nombre saisi est superieur " + nbr_saisie);
    }else if(nbr_saisie < solution) {
        console.log("Le nombre saisi est inferieur " + nbr_saisie);
    } else {
        console.log("Bravo vous avez gagner");
    }

    i++;
}

if (i == 6){
    console.log("Vous avez atteint le nombre de tentative");
}



/*
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);
*/

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + nbr_saisie + ")");

// TODO : complétez le programme