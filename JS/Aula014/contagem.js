function piensa() {
    var inicio = document.getElementById('inum1')
    var final = document.getElementById('inum2')
    var passos = document.getElementById('steps')
    var res = document.querySelector('#res')
    if (inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        res.innerHTML  = 'impossivel contar'
        window.alert('[ERROR] Faltam dados')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passos.value)

        if (p <= 0) {
            window.alert('[ERROR] falta de dados considerando passo 1')
            p = 1
        }

        if (i < f) {
            //Contagem cresente
            for (let c = i ; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F9BF}`
            }
        } else {
            //Contegem regresiva
            for (let c = i ; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F9BF}`
        }

        res.innerHTML += `\u{1F3C1}`
    }
}
