let input = document.getElementById('user-input')
let output = document.getElementById('output')
let controle = false

document.getElementById('toggle').addEventListener('click', () => {
    if(controle == false){
        controle = true
        document.getElementById('title').innerHTML = 'Binary to Decimal'
        document.getElementById('title-2').innerHTML = 'Insert Binary:'
        document.getElementById('user-input').pattern = '^[0-1]*$'
        document.getElementById('user-input').value = ''
        document.getElementById('user-input').placeholder = 'Insert Binary'
        output.innerHTML = ''
        document.title = 'Binary to Decimal'
        document.getElementById('user-input').addEventListener('keypress', teste)
    }
    else{
        controle = false
        document.getElementById('title').innerHTML = 'Decimal to Binary'
        document.getElementById('title-2').innerHTML = 'Insert Decimal:'
        output.innerHTML = ''
        document.getElementById('user-input').value = ''
        document.getElementById('user-input').placeholder = 'Insert Decimal'
        document.title = 'Decimal to Binary'
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
    return decimal
}

function teste(e){
    if(e.key > 1){
        input.value = ''
        output.innerHTML = 'Invalid Input'
    }
    else{
        return e.key
    }
}