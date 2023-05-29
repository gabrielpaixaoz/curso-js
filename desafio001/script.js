function carregar() {
  var info = window.document.getElementById('info')
  var imagem = window.document.getElementById('imagem')
  var fundo = window.document.getElementById('cor')

  var hora = new Date()
  var agora = hora.getHours()

  info.innerHTML = `Agora são ${agora} horas.`
  if (hora >= 0 && hora < 12) {
    imagem.src = 'imagens/bom-dia.jpg'
    //BOM DIA !
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'imagens/boa-tarde.jpg'
    //BOA TARDE !
  } else {
    imagem.src = 'imagens/boa-noite.jpg'
  }
}
