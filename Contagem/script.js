
function clicar() {
    var numInicio = document.getElementById('txti')
    var numFim = document.getElementById('txtf')
    var numPasso = document.getElementById('txtp') 
    var Res = document.getElementById('res')

    if (txti.value.length == 0 ||txtf.value.length == 0 || txtp.value.length == 0){
        window.alert('[ERRO] Favor, preenchar todos os espaços')
    } else {
        Res.innerHTML = 'Contando: '
        let i = Number(numInicio.value)
        let f = Number(numFim.value)
        let p = Number(numPasso.value)

        for(let c = i; c <= f; c = c + p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}