var payment = document.getElementsByName('type-payment');
var nom = document.getElementById('name');
var adresse = document.getElementById('adresse');
var num_tele = document.getElementById('tele');
var email = document.getElementById('email');
var password = document.getElementById('password');
var type_carte = document.getElementById('type-carte');
var num_carte = document.getElementById('num-carte');
var month = document.getElementById('month');
var year = document.getElementById('year');
var code = document.getElementById('code-verification');
//block error and block info
var erreur = document.getElementById('block_er');
var info = document.getElementById('info');

function changePay(){
    var info_visa = document.querySelector('.info-visa');
    var info_paypal = document.querySelector('.info-paypal');
    if(payment[0].checked){
        info_paypal.style.display = "block";
        info_visa.style.display = "none";
    }
    else{
        info_paypal.style.display = "none";
        info_visa.style.display = "block";
    };
}
function validate(){
    
    erreur.innerHTML='';
    info.innerHTML='';
    info.style.display="none";
    if(nom.value==''|| adresse.value==''|| num_tele.value==''|| (payment[0].checked && (email.value==''|| password.value==''))|| (payment[1].checked && (type_carte.value==''|| num_carte.value==''|| month.value==''|| year.value==''|| code.value==''))){
        erreur.style.display="block";
        erreur.innerHTML += "vous avez oublié de remplir un champ obligatoire<br>";
    }
    else if(!/^[0-9]{9}$/.test(num_tele.value)){
        erreur.style.display="block";
        erreur.innerHTML += "numero de telephone doit contenir seulement 9 nombre<br>";
    }
    else if(payment[0].checked && email.value.indexOf('@')==-1){
        erreur.style.display="block";
        erreur.innerHTML += "email incorrecte";
    }
    else if(payment[1].checked && (!/^[0-9]{16}$/.test(num_carte.value))){
        erreur.style.display="block";
        erreur.innerHTML+="numero de la carte bancaire doit contenir 16 nombres<br>";

    }
    else if(payment[1].checked && (!/^[0-9]{3}$/.test(code.value))){
        erreur.style.display="block";
        erreur.innerHTML+="code de verification doit contenir 3 nombre seulement<br>"
        return false;
    }
    else{
        erreur.style.display="none";
        info.style.display = "block";
        info.innerHTML+="nom de client: "+nom.value+"<br>"
        +"numero de telephone: "+num_tele.value;
        if(payment[0].checked){
            info.innerHTML+="<br>methode de payment: Paypal";
        }
        else{
            info.innerHTML+="<br>methode de payment: par carte bancaire";
        }
    }
};