let num = [9, 8 , 2 , 3 , 4 , 6 , 4]
num.push(5)
num.sort()

console.log(`Vosso numero tem ${num.length} pocições`)
console.log(`o primeiro numero do vetor é o ${num[0]}`) 

let pos = num.indexOf(8)
if (pos < 0) {
    console.log ('Não tem valor aqui')
} else {
    console.log(`o valor esta na posição ${pos}`)
}


