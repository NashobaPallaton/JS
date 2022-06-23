function checkForm(f){
    document.write("Je m'appel "+f.elements["nom"].value+" "+f.elements["prenom"].value+" et j'ai "+f.elements["age"].value+" ans.");
    return false;
}