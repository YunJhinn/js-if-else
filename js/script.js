function renda(){
    
    let sm = 1980
    let nascimento = new Date( document.getElementById('nasc').value);
    let hoje = new Date(); 
    let anoscompletos = hoje.getUTCFullYear()- nascimento.getUTCFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth()
    if (mes < 0 || ( mes === 0 && hoje.getDate() < nasc.getDate() ) ) {
        anoscompletos--
    }
    let quantidadepessoas = document.getElementById('qtdp').value;
    let somasalarios = document.getElementById('qtds').value;
    let rendapercapita = somasalarios / quantidadepessoas
    if(anoscompletos>=16 && rendapercapita <= sm){
        document.getElementById('decisao').innerHTML = "aprovado, você atende aos critérios para se matricular no programa,entre em contato com o número (xx) xxxx-xxxx para fianlizar sua matricula "
    }
    else{
        document.getElementById('decisao').innerHTML = "reprovado, você não atende aos critérios para participar do programa "
    }


}