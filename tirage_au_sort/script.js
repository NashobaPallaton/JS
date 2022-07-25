function random(max) {
    return Math.floor(Math.random() * max)
}

function lancer() {
    const eleve = ['Camille', 'Théo', 'Zak', 'Salomé', 'Halim', 'Fred', 'Benoît', 'Outman', 'Perrine', 'Stephane', 'Greg', 'Océane', 'Cédric', 'Antho', 'Jimmy', 'Karim'];
    let hasard = random(eleve.length);
    let resultat = eleve[hasard]
    document.getElementById('result').innerHTML = resultat

}







