let student = ['Salomé', 'Océane', 'Karim', 'Jimmy', 'Ben', 'Fred', 'Greg', 'Cam', 'Antho', 'Cédric', 'Steph',];
let student2 = ['Perrine', 'Théo', 'Outman', 'Halim', 'Zak']

console.log(`le diminutif de Benoît est : ${student[4]}`)

//methode push() pour ajouter des élément à la suite dans le tableau
student.push("Zaza", "Mimi")
console.log(`methode push() ${student}`)

//methode shift() pour retirer le premier élément du tableau
student.shift()
console.log(`methode shift() ${student}`)
//permets aussi d'afficher le premier élément ici Océane vu que Salomé shifté au dessus
firststud = student.shift()
console.log(`methode shift() ${firststud}`)


//methode concat() pour lier des tableaux
let list = student.concat(student2);
console.log(`methode concat() ${list}`)

//methode splice() pour ajouter des elements au tableau à une position donnée
//ici ajoute Toto en quatrième position 
student2.splice(3, 0, "Toto")
console.log(`methode splice() ${student2}`)

//methode pop() retire le dernier élément du tableau
student2.pop()
console.log(`methode pop() ${student2}`)
//permets aussi d'afficher le dernier élément ici Halim vu que Zak retiré pas le pop au dessus
laststud = student2.pop()
console.log(`methode pop() ${laststud}`)

//methode copyWithin() copie des éléments du tableaux par dessus des element du dit tableau
//ici copy l'élément 0 en position 2
console.log(`methode copyWithin() ${student2.copyWithin(2, 0)}`)

//methode fill() remplace les éléments du tableau par le nouvel élément
console.log(`methode fill() ${student2.fill("Toto")}`)

// afficher input dans HTML
function recive(){
    let nom = document.getElementById("entry").value;

    document.getElementById("response").innerHTML = `le nom entré est ${nom}`
}



