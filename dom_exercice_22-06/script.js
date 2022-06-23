//exercice 1

document.write("EXO1", "<BR/>")
let pers = new Array(5);

Array.prototype.push("Halim", "Cédric", "Stéphane", "Zak", "Abdel");

document.write("tableau d'origine : "+pers+"<BR/>","<BR/>");

pers.sort()
document.write("tri croissant : "+pers+"<BR/>","<BR/>");

pers.reverse()
document.write("tri décroissant : "+pers+"<BR/>");

//exercice 2

document.write("<BR/>", "<BR/>", "EXO2", "<BR/>");

let dateauj = new Date()
document.write("Aujourd'hui : "+dateauj+"<BR/>");

//exercice 3

document.write("<BR/>", "<BR/>", "EXO3", "<BR/>")

let jour = {weekday: 'long'};

document.write(dateauj.toLocaleDateString("fr-FR", jour).toUpperCase());
document.write("<br/>")
