function calcular(){
    let qtdArroz = Number(document.getElementById('qtdArroz').value)
    let qtdFeijao = Number(document.getElementById('qtdFeijao').value)
    let qtdOleo = Number(document.getElementById('qtdOleo').value)
    let qtdMacarrao = Number(document.getElementById('qtdMacarrao').value) 
     
    // Calcula a pontuação total
    let pontos = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdMacarrao * 4) + (qtdOleo * 2)
    
    
    let cor = document.getElementById('cor').value
    let metaKit 

    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }
    else if (cor == "laranja"){
        metaKit = 21
    }

    // obter o valor que o usuário informou de qtde de kits
    let qtdeKits = Number(document.getElementById('qtdeKits').value)

    // Vamos verificar se bateu a meta de kits de alimentação
    if (qtdeKits >= metaKit){
        pontos += 5000
        if(qtdeKits > metaKit){
            pontos = pontos + (qtdeKits - metaKit) * (5000 / metaKit)
        }
    }
    else{
        pontos = pontos + (qtdeKits) * (5000 / metaKit)
    }
    // define a meta do suplemento 
    let metaSuplemento
    if(metaKit % 2 == 0){ // é par
        metaSuplemento = metaKit / 2 // divisão de um inteiro por outro inteiro dá inteiro
    }
    else {
        metaSuplemento = (metaKit / 2) + 0.5
    }

    let qtdeSuplementos = Number(document.getElementById("qtdeSuplementos").value)
    if (qtdeSuplementos >= metaSuplemento){
        pontos += 5000
        if(qtdeSuplementos > metaSuplemento){
            pontos += (qtdeSuplementos - metaSuplemento) * (5000 / metaSuplemento)
        }
    }
    else {
        pontos += qtdeSuplementos * (5000 / metaSuplemento)
    }

    // define a meta do leite 
    let metaLeite = metaKit
    // define a meta do sangue
    let metaSangue = metaSuplemento

    // Mostramos a pontuação total ao usuário
    document.getElementById("result").innerHTML = "Pontuação: " + pontos.toFixed(2)
}
