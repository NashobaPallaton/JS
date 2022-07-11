function recive(){
    let number = document.getElementById("entry").value;

    document.getElementById("response").innerHTML = `Le carré de ${number} est ${number*number}`;
    console.log(`Le carré de ${number} est ${number*number}`);
}

