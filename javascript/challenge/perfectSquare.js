// Challenge
// Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 
// Entrada
// A entrada consiste em um número inteiro n, representando o valor total. 
// Saída
// A saída consiste em retornar o menor número de números quadrados perfeitos. 
//  
// Ex de Entrada || Ex de Saída
//      12       ||     3
//      13       ||     2
//      10       ||     2
//

let n = 12

fourSquare(n)

function fourSquare(numb){
  let square = []
  for(let i = 1; i*i < numb; i++){
    square.push(i * i)
  }

  r = getLessSum(square, numb)
  console.log(r)
}

function getLessSum(square, numb){
  let less = numb 
    
  for(let i = square.length - 1; i >= 0; i--){
    let sum = 0
    if(square[i] < numb){
      if(numb % square[i] === 0){
        sum += numb / square[i]
      }
      else{
        sum++
        let rest = numb % square[i]

        sum += getLessSum(square, rest)
      }
      less = (less < sum) ? less : sum
    }
  }
  return less
}