function recive(){
    let number = document.getElementById("entry").value;

    document.getElementById("response").innerHTML = `Le carré de ${number} est ${number*number}`; //backtick
    document.getElementById("response2").innerHTML = "Le carré de " + number + " est " + number*number; //vieille methode

    console.log(`Le carré de ${number} est ${number*number}`);
}