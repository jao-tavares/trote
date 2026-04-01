function calcular(){
    let qtdArroz = Number(document.getElementById('qtdArroz').value)
    let qtdFeijao = Number(document.getElementById('qtdFeijao').value)
    let qtdOleo = Number(document.getElementById('qtdOleo').value)
    let qtdMacarrao = Number(document.getElementById('qtdMacarrao').value)

    // Calcula a pontuação total
    let pontos = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdOleo * 3) + (qtdMacarrao * 4) 
    // Mostramos a pontuação total ao usuário
    let result = document.getElementById('result').innerHTML = "Pontuação: " + pontos
}
