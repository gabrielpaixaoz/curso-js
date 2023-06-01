function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('iano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    if (sexo[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'menino.jpeg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src','jovem.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src','homem.jpg')
      } else {
        // Idoso
        img.setAttribute('src','idoso.jpg')
      }
    } else if (sexo[1].checked) {
      genero = 'mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src','menina.jpeg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src','jovemu.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src','mulher.jpg')
      } else {
        // Idoso
        img.setAttribute('src','idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    res.appendChild(img)
  }
}
