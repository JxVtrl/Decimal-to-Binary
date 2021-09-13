let input = document.getElementById('user-input')
let output = document.getElementById('output')
let controle = false

document.getElementById('toggle').addEventListener('click', () => {
    if(controle == false){
        controle = true
        document.title = 'Binary to Decimal'
        
        document.getElementById('title').innerHTML = 'Binary to Decimal'
        document.getElementById('title-2').innerHTML = 'Insert Binary:'
        
        input.placeholder = 'Insert Binary'
        input.value = ''
        output.innerHTML = ''
        
        input.max = '1'
        input.addEventListener('keypress', teste)
    }
    else{
        controle = false
        document.title = 'Decimal to Binary'
        
        document.getElementById('title').innerHTML = 'Decimal to Binary'
        document.getElementById('title-2').innerHTML = 'Insert Decimal:'
        
        input.placeholder = 'Insert Decimal'
        input.value = ''
        output.innerHTML = ''
        
        input.removeEventListener('keypress', teste)
    }
})

function convert(){
    if(controle == false){
        output.innerHTML = decimalToBinary(input.value)
    }
    else{
        output.innerHTML = binaryToDecimal(input.value)
    }
}

function decimalToBinary(decimal){
    let binary = []
    while (decimal > 0){
        binary.push(decimal % 2)
        decimal = Math.floor(decimal / 2)
    }
    return binary.reverse().join('')
}

function binaryToDecimal(binary){
    let decimal = 0
    for(let i = 0; i < binary.length; i++){
        if(binary[i] == 1){
            decimal += Math.pow(2, i)
        }
    }

    decimal == 0 ? decimal = 'Invalid binary' : decimal

    return decimal
}

function teste(e){
    if(e.key >= 2){
        input.value = ''
        output.innerHTML = 'Invalid binary'
    }
    else{
        return e.key
    }
}