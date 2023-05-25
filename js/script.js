function renda(){
    alertap = ("Aprovado")
    alertrc = ("Reprovado") 
    let sm = 1980
    let idade = Date.parse( document.getElementById('nasc').value);
    let diferencadata = Date.now(2023)- idade;
    let novaidade = diferencadata;
    let anoscompletos = idade.getUTCFullYear()-1970
    let quantidadepessoas = document.getElementById('qtdp').value;
    let somasalarios = document.getElementById('qtds').value;
    if(diferencadata>=16 && somasalarios <= parseFloat((1.5*sm)/quantidadepessoas)){
        document.getElementById('decisao').innerHTML = alertap
    }
    else{
        document.getElementById('decisao2').innerHTML = alertrc
    }


}