const numeros = [2, 9, 14, 7, 15, 8, 26, 1, 13, 15]

function Bingo(numeros) {
    const letras = "BINGO"
    const letrasEncontradas = new Set()
  
    for (let i = 0; i < numeros.length; i++) {
      const letra = String.fromCharCode(64 + numeros[i])
  
      
      if (letras.includes(letra)) {
        letrasEncontradas.add(letra)
      }
    }
  
    if (letrasEncontradas.size === letras.length) {
      return "GANHOU"
    } else {
      return "PERDEU"
    }
}

const resultado = Bingo(numeros)
console.log("Resultado do jogo de BINGO:", resultado)