let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
let quadro = document.querySelector('option#quadro')

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    const max = Math.max(...valores)
    const min = Math.min(...valores)
    const sum = valores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    const media = sum / valores.length

    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor infomado foi ${max}.</p> `
    res.innerHTML += `<p> O menor valor infomado foi ${min}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${sum}</p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media}.`
  }
}
