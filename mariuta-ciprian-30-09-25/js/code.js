//prima parte
const nome= "Ciprian";
var faruk ="faruk";

var variabile = document.getElementById('form-class').innerText ;
alert(variabile);

document.getElementById('p-js').innerText = nome;
function sorpresa_faruk(){
document.getElementById('faruk').innerText =faruk;
}
//fine prima parte
function accedi_bottone(){
    if(document.getElementById('nome').value === ""){
        alert("Non puo essere vuoto");
        
        document.getElementById("nome").classList.add('border-red');
    }
    else{
       document.getElementById('nome').classList.add('border-green');
       alert("errore");
    }
}
