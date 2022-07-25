const element = document.getElementById('btn');
element.addEventListener('click', dateAuj)

function dateAuj (){
    let date = Date();
    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('firstname').value;
document.getElementById('result').innerHTML = `Nom: ${nom}<br> Prénom: ${prenom}<br> Date: ${date}`;
}