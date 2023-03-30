function multiplicar(numero) {
    var tabuada = []
    for (let index = 1; index < 11; index++) {
        tabuada.push(numero * index)
    }
    
    var tabuada2 = []
    var sucessor = numero + 1
    var numeroSucessor = numero + 2
    for (let index = 1; index < 11; index++) {
        tabuada2.push(sucessor * index)
        tabuada2.push(numeroSucessor * index)
    }
    return {tabuada, tabuada2}
}

console.log(multiplicar(5))