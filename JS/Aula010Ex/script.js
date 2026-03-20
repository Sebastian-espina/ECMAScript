function carregar() {
    var msg = document.getElementById('text')
    var img = document.getElementById('day')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São as ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'imagens/mañana.png'
        document.body.style.background = '#d8855d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/dia.png'
        document.body.style.background = '#00bfee'
    } else {
        img.src = 'imagens/noche.png'
        document.body.style.background = '#1f2a30'
    }
}
