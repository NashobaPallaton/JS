            
    let math = document.getElementByID("inputnote1").value;
    let fr = document.getElementByID("inputnote2").value;
    let hg = document.getElementByID("inputnote3").value;
    let sport = document.document.getElementByID("inputnote4").value;
    let ap = document.getElementByID("inputnote5").value;
    let pc = document.getElementByID("inputnote6").value; 



function get_value(){
         if (isNaN(input) == true) {
       alert('Merci de saisir un montant correct. Calcul impossible.');
         Form1.ht.value = 0 ;     } else {
var input = document.getElementsByName("inputnote1").value ;
alert(input); }
    
}



function calculer_moyenne(){

    moy = (math+fr+hg+sport+ap+pc)/6;
    
}

// const btn = document.querySelector('button');
// const txt = document.querySelector('p');

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//     console.log('clic')
//     if (btn.textContent === 'Démarrer la machine') {
//     btn.textContent = 'Arrêter la machine';
//     txt.textContent = 'La machine est en marche&nbsp;!';
//   } else {
//     btn.textContent = 'Démarrer la machine';
//     txt.textContent = 'La machine est arrêtée.';
//   }
// }



//doc formulaire

// function CalculerMontantTTC() {
//     if (isNaN(Form1.ht.value) == true) {
//         alert('Merci de saisir un montant correct. Calcul impossible.');
//         Form1.ht.value = 0 ;
//     } else {
//         //form1 c'est le nom de mon formulaire Ht le nom de mon input et value est la valeur dans cette input
//         Form1.tva.value = (Form1.boisson.value / 100) * 19.6; //calcul de tva
//         Form1.ttc.value = Number(Form1.boisson.value) + Number(Form1.tva.value);// prix ttc
//         Form1.prixboissons.value = Number(Form1.boisson.value);

//     }
// }