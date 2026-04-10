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

    // Mostramos a pontuação total ao usuário
    document.getElementById("result").innerHTML = "Pontuação: " + pontos
}
