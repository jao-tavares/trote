function calcular(){
    let qtdArroz = Number(document.getElementById('qtdArroz').value)
    let qtdFeijao = Number(document.getElementById('qtdFeijao').value)
    let qtdOleo = Number(document.getElementById('qtdOleo').value)
    let qtdMacarrao = Number(document.getElementById('qtdMacarrao').value) 
     
    // Calcula a pontuação total
    let pontos = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdMacarrao * 4) + (qtdOleo * 2)
    
    
    let cor = document.getElementById('cor').value
    let metaKit 

    if (cor == verde){
        metaKit = 61
    }
    else if (cor == vermelho){
        metaKit = 32
    }
    else if (cor == laranja){
        metaKit = 21
    }


    // Mostramos a pontuação total ao usuário
    let result = document.getElementById('result').innerHTML = "Pontuação: " + pontos
}
