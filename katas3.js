const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    let numeros = []
    let numero = 1
    for(let i=0;i<25;i++){
        numeros.push(numero)
        numero++
    }
    return numeros
}

console.log("Kata 1 - Retornar os números de 1 a 25: (1, 2, 3, …, 24, 25):")
console.log(kata1())

function kata2() {
    // implemente o código do kata 2 aqui
    return kata1().reverse()
}

console.log("Kata 2 - Retornar os números de 25 a 1: (25, 24, 23, …, 2, 1):")
console.log(kata2())

function kata3() {
    // implemente o código do kata 3 aqui
    let numeros = []
    let numero = 1
    for(let i=0;i<25;i++){
        numeros.push(-numero)
        numero++
    }
    return numeros
}

console.log("Kata 3 - Retornar os números de -1 a -25: (-1, -2, -3, …, -24, -25):")
console.log(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
    return kata3().reverse()
}

console.log("Kata 4 - Retornar os números de -25 a -1: (-25, -24, -23, …, -2, -1):")
console.log(kata4())

function kata5() {
    // implemente o código do kata 5 aqui
    let numerosPositivos = kata2()
    let numerosNegativos = kata3()
    let imparPositivo = []
    let imparNegativo = []
    let resultado = []
    for(let i=0;i<numerosPositivos.length;i++){
        if (numerosPositivos[i]%2 != 0){
            imparPositivo.push(numerosPositivos[i])
        }
    }
    for(let i=0;i<numerosNegativos.length;i++){
        if (numerosNegativos[i]%2 != 0){
            imparNegativo.push(numerosNegativos[i])
        }
    }
    for(let i=0;i<imparPositivo.length;i++){
        resultado.push(imparPositivo[i])
    }
    for(let i=0;i<imparNegativo.length;i++){
        resultado.push(imparNegativo[i])
    }
    return resultado
}

console.log("Kata 5 - Retornar os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25):")
console.log(kata5())

function numeros1a100(){
    let resultado = []
    let numero = 1
    for(let i=0;i<100;i++){
        resultado.push(numero)
        numero++
    }
    return resultado
}

function kata6() {
    // implemente o código do kata 6 aqui
    let numeros = numeros1a100()
    let resultado = []
    for (let i=0;i<numeros.length;i++){
        if(numeros[i]%3==0){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log("Kata 6 - Retornar os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99):")
console.log(kata6())

function kata7() {
    // implemente o código do kata 7 aqui
    let numeros = numeros1a100()
    let resultado = []
    for (let i=0;i<numeros.length;i++){
        if(numeros[i]%7==0){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log("Kata 7 - Retornar os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98):")
console.log(kata7())

function kata8() {
    // implemente o código do kata 8 aqui
    let numeros = numeros1a100().reverse()
    let resultado = []
    for (let i=0;i<numeros.length;i++){
        if(numeros[i]%3==0 || numeros[i]%7==0){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log("Kata 8 - Retornar os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3):")
console.log(kata8())

function kata9() {
    // implemente o código do kata 9 aqui
    let numeros = numeros1a100()
    let resultado = []
    for (let i=0;i<numeros.length;i++){
        if(numeros[i]%2 !=0 && numeros[i]%5==0){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log("Kata 9 - Retornar os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95):")
console.log(kata9())

function kata10() {
    // implemente o código do kata 10 aqui
    return sampleArray
}

console.log("Kata 10 - Retornar os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472):")
console.log(kata10())

function kata11() {
    // implemente o código do kata 11 aqui
    let resultado=[]
    for (let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2==0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

console.log("Kata 11 - Retornar todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472):")
console.log(kata11())

function kata12() {
    // implemente o código do kata 12 aqui
    let resultado=[]
    for (let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2!=0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

console.log("Kata 12 - Retornar todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535):")
console.log(kata12())

function kata13() {
    // implemente o código do kata 13 aqui
    let resultado=[]
    for (let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%8==0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

console.log("Kata 13 - Retornar os números divisíveis por 8 em sampleArray: (712, 456, …, 472):")
console.log(kata13())

function kata14() {
    // implemente o código do kata 14 aqui
    let resultado=[]
    for (let i=0;i<sampleArray.length;i++){
            resultado.push(Math.pow(sampleArray[i],2))
    }
    return resultado
}

console.log("Kata 14 - Retornar o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784):")
console.log(kata14())

function kata15() {
    // implemente o código do kata 15 aqui
    let numero = 1
    let resultado = 0
    for (let i=0;i<20;i++){
        resultado+=numero
        numero++
    }
    return resultado
}

console.log("Kata 15 - Retornar a soma de todos os números de 1 a 20:")
console.log(kata15())

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0
    for (let i=0;i<sampleArray.length;i++){
        resultado+=sampleArray[i]
    }
    return resultado
}

console.log("Kata 16 - Retornar a soma de todos os elementos de sampleArray:")
console.log(kata16())

function kata17() {
    let resultado
    // implemente o código do kata 17 aqui
    for (let i=0;i<sampleArray.length;i++){
        resultado = sampleArray[i]
        for (let j=0;j<sampleArray.length;j++){
            if(resultado>sampleArray[j]){
                resultado = sampleArray[j]
            }
        }
    }
    return resultado
}

console.log("Kata 17 - Retornar o menor elemento de sampleArray:")
console.log(kata17())

function kata18() {
    // implemente o código do kata 18 aqui
    let resultado
    // implemente o código do kata 17 aqui
    for (let i=0;i<sampleArray.length;i++){
        resultado = sampleArray[i]
        for (let j=0;j<sampleArray.length;j++){
            if(resultado<sampleArray[j]){
                resultado = sampleArray[j]
            }
        }
    }
    return resultado
}

console.log("Kata 18 - Retornar o maior elemento de sampleArray:")
console.log(kata18())