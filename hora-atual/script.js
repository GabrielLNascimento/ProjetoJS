const msg = document.getElementById('demo');

function atualizarhora(){
    let d = new Date()
    let segundo = d.getSeconds()
    let minuto = d.getMinutes()
    let hora = d.getHours()

    
    msg.textContent = hora + ':' + minuto + ':' + segundo

    setTimeout(atualizarhora, 1000);
}

document.addEventListener('DOMContentLoaded', atualizarhora);
