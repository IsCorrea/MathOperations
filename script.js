let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

let sum = Number(firstNumber) + Number(secondNumber)
alert(`A soma dos dois números é: ${sum}`)

let sub = Number(firstNumber) - Number(secondNumber)
alert(`A subtração dos dois números é: ${sub}`)

let multi = Number(firstNumber) * Number(secondNumber)
alert(`A multiplicação dos dois números é: ${multi}`)

let div = (Number(firstNumber) / Number(secondNumber)).toFixed(2)
alert(`A divisão dos dois números é: ${div}`)

let rest = Number(firstNumber) % Number(secondNumber)
alert(`O resto da divisão dos dois números é: ${rest}`) 

let parImpar = sum/2
if (parImpar - Math.round(parImpar) == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber == secondNumber) {
  alert(`Os números inseridos são iguais`)
} else {
  alert(`Os números inseridos são diferentes`)
}