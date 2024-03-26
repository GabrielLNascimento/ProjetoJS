const msg = document.getElementById('demo');

function atualizarhora(){
    let d = new Date()
    let segundo = d.getSeconds()
    let minuto = d.getMinutes()
    let hora = d.getHours()

    if(segundo < 10){
        segundo = '0' + segundo
    } else{
        segundo = segundo
    }
    if (minuto < 10){
        minuto = '0' + minuto
    } else {
        minuto = minuto
    }
    if (hora < 10){
        hora = '0' + hora
    } else {
        hora = hora
    }
    
    msg.textContent = hora + ':' + minuto + ':' + segundo

    setTimeout(atualizarhora, 1000);
}

document.addEventListener('DOMContentLoaded', atualizarhora);
