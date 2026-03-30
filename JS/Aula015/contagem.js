function gerar() {
    let num = document.getElementById('inum')
    let select = document.getElementById('isel')

    if (num.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        let n1 = Number(num.value)
        let c = 1
        select.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `${c}`
            select.appendChild(item)
            c++
        }
    }
}