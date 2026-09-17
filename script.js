let usuariocadastro=""
let senhacadastro=""
function cadastro(){

usuariocadastro = document.getElementById("usuario").value  
senhacadastro = document.getElementById("senha").value

if (usuariocadastro == "" || senhacadastro ==""){
    alert("PREENCHA OS CAMPOS")
}
else{
    alert("CADASTRO FEITO COM SUCESSO")
}

}

function login(){

}