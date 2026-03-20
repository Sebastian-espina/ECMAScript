const { createElement } = require("react")

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inum')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) >= ano) {
        alert('ERROR verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'imagens/Menino.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/Homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'imagens/Menina.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/Mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}