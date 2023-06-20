let num = document.getElementById('num')
let lista = document.getElementById('flista')
let valores = []
let n = Number(num.value)

function adicionar() {
  if (num.value.length == 0) {
    window.alert('Valor inválido ou ja encontrado na lista.')
  } else {
    lista.innerHTML = `TESTANDO`
  }
}

function finalizar() {
  if (lista.value.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } 
}
