function search() {

    var text = document.getElementById("p").innerHTML;
    var mot = document.getElementById("entry").value;

    if(mot!=""){
        let expReg = new RegExp(mot, "ig");
        let remplacement = `<span style='color:grey;background-color:black;'>${mot}</span>`;

        text = text.replace(expReg,remplacement);
        document.getElementById("p").innerHTML = text;
        
    }
}