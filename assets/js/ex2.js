document.getElementById("botao").addEventListener("click",function(evento){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var evento = evento
    // verificar nome
    if(nome.length < 4 || nome.indexOf(" ") == -1){
        erro(evento,id = "nome")
    }
    else{
        document.getElementById("nome").style.border="black 2px solid"
    }
    nome.split("")
    for(var i = 0; i < nome.length;i++){
        if(nome[i].match(/^[áàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ]+$/)){
            document.getElementById("nome").style.border="black 2px solid"
        }
        else{
            if(nome[i].match(/\W|_/) && nome[i] != " " || nome[i].match(/^[0-9]+$/)){
                erro(evento, id = "nome")
            }
        }
    }
    // acabou a verificação do nome e começa a do email
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.length < 4){
        erro(evento, id="email")
    }
    else{
        document.getElementById("email").style.border="black 2px solid"
    }
    //fim da verificação do email
})
//funcao para deixara borda em vermelho
function erro(evento,id){
    document.getElementById(id).style.border="red 2px solid"
    evento.preventDefault()
}