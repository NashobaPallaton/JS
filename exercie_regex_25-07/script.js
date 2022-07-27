let form = document.getElementById('loginForm').value;

form.email.addEventListener('change', function(){
    validEmail(this);
});

const validEmail = function(mail) {
    let emailRegexp = new RegExp(
        '^[a-zA-Z0-9.-_]+@{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

        let testemail = emailRegexp.test(mail.value);
        let small = mail.nextElementSibling;

    if (testemail) {
        small.innerHTML = 'Adresse Valide';
    }    
    else{
        small.innerHTML = 'Adresse Invalide'
    }
}
