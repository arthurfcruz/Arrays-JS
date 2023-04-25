const pessoasPorParada = [[2, 0], [3, 1], [1, 2], [0, 1]]

function pontosDeOnibus(pessoasPorParada) {
    let pessoasNoOnibus = 0
  
    for (let i = 0; i < pessoasPorParada.length; i++) {
      const entrada = pessoasPorParada[i][0];
      const saida = pessoasPorParada[i][1]
  
      pessoasNoOnibus += entrada
      pessoasNoOnibus -= saida
  
      if (pessoasNoOnibus < 0) {
        pessoasNoOnibus = 0
      }
    }
    return pessoasNoOnibus
}  

const pessoasNoOnibus = pontosDeOnibus(pessoasPorParada)
console.log("Total de pessoas no ônibus após a última parada:", pessoasNoOnibus)