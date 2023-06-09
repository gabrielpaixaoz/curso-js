function tabuada(){
  var numb = document.getElementById('txtn')
  var tab = document.getElementById('teste')
  
  if(numb.value.length == 0){
    window.alert('[ERRO]')
  }else{
    var numero = Number(numb.value)
   

    for(var c = 1; c<= 10; c+=){
      var result = c * numero;
      tab.innerHTML = `${numero} x ${c} = ${result}`
    }
    
    
  
    
  }
}