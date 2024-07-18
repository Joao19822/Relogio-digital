var horaElement = document.getElementById('hora')
var minutosElement = document.getElementById('minutos')
var segundosElement = document.getElementById('segundos')

function novoTempo(){
    var date = new Date();
    
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()
    
    horaElement.textContent = fixtime(hora)
    minutosElement.textContent = fixtime(minutos)
    segundosElement.textContent = fixtime(segundos)
}


function fixtime(time){
    return time < 10 ? '0'+time : time
}

novoTempo()
setInterval(novoTempo, 1000)