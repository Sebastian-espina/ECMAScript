var agora = new Date()
var hora = agora.getHours
var boat = 'Boa tarde!'
var bom = 'Bom dia!'
var boan = 'Boa noite!'
console.log(`São as ${hora}`)
if (hora < 12) {
    console.log(bom)
} else if (hora < 18) {
    console.log(boat)
} else {
    console.log(boan)
}