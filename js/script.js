function renda(){
    alertap = ("Aprovado")
    alertrc = ("Reprovado") 
    let sm = 1980
    let nascimento = new Date( document.getElementById('nasc').value);
    let hoje = new Date(); 
    let anoscompletos = hoje.getUTCFullYear()- nascimento.getUTCFullYear(nascimento);
    let mes = new Date().getMonth() - nascimento.getMonth()
    if (mes < 0 || ( mes === 0 && hoje.getDate() < nasc.getDate() ) ) {
        anoscompletos--
    }
    let quantidadepessoas = document.getElementById('qtdp').value;
    let somasalarios = document.getElementById('qtds').value;
    if(anoscompletos>=16 && somasalarios <= parseFloat((1.5*sm)/quantidadepessoas)){
        document.getElementById('decisao').innerHTML = alertap
    }
    else{
        document.getElementById('decisao2').innerHTML = alertrc
    }


}