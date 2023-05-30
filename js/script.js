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
        document.getElementById('decisao').innerHTML = "aprovado, você atende aos critérios para se matricular no programa,entre em contato com o número (xx) xxxx-xxxx para finalizar sua matricula "
    }
    else{
        document.getElementById('decisao').innerHTML = "reprovado, você não atende aos critérios para participar do programa "
    }


}

// function media(){
//     let nota1 = parseFloat(document.getElementById('nota1').value);
//     let nota2 = parseFloat(document.getElementById('nota2').value);
//     let nota3 = parseFloat(document.getElementById('nota3').value);
//     let notafinal = (nota1 + nota2 + nota3) /3
// }

// PAGINA2
function presenca(){
// notafinal
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let notafinal = (nota1 + nota2 + nota3) /3
    const diastotais = parseInt (12)
// presencafinal
    
    let dia1 = parseFloat(document.querySelector('input[name="dia1"]:checked').value)
    console.log(dia1)
    let dia2 = parseFloat(document.querySelector('input[name="dia2"]:checked').value)
    let dia3 = parseFloat(document.querySelector('input[name="dia3"]:checked').value)
    let dia4 = parseFloat(document.querySelector('input[name="dia4"]:checked').value)
    let dia5 = parseFloat(document.querySelector('input[name="dia5"]:checked').value)
    let dia6 = parseFloat(document.querySelector('input[name="dia6"]:checked').value)
    let dia7 = parseFloat(document.querySelector('input[name="dia7"]:checked').value)
    let dia8 = parseFloat(document.querySelector('input[name="dia8"]:checked').value)
    let dia9 = parseFloat(document.querySelector('input[name="dia9"]:checked').value)
    let dia10 = parseFloat(document.querySelector('input[name="dia10"]:checked').value)
    let dia11 = parseFloat(document.querySelector('input[name="dia11"]:checked').value)
    let dia12 = parseFloat(document.querySelector('input[name="dia12"]:checked').value)

    let diaspresentes = dia1 + dia2 + dia3 + dia4 + dia5 + dia6 + dia7 + dia8 + dia9 + dia10 + dia11 + dia12

    let presencatotal = parseFloat((diaspresentes / diastotais) * 100)

    if(notafinal>=6 && presencatotal>=75){
        document.getElementById('resultado').innerHTML = ("Parabéns, você foi Aprovado!!!")
    }
    if(notafinal<6 && presencatotal>=75){
        document.getElementById('resultado').innerHTML = ("Você foi Reprovado devido a: Nota abaixo da Média!")
    }
    if(notafinal>=6 && presencatotal<75){
        document.getElementById('resultado').innerHTML = ("Você foi Reprovado devido a: Presença abaixo do necessário(75%)")
    }
    if(notafinal<6 && presencatotal<75){
        document.getElementById('resultado').innerHTML = ("Você está com a nota e a presença abaixo do necessário , reveja seus atos menó")
    }



    
}