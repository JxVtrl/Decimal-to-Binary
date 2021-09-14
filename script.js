let input = document.getElementById('user-input')
let output = document.getElementById('output')
let txtToggle = document.getElementById(`text-toggle`)
let txtHide = document.getElementById('text-btn')
let controle = false
let txtControl = false

txtToggle.addEventListener('change', text)

function text(){
    txtControl = !txtControl
    if(txtControl == true){
        document.title = 'Text to Binary'
        document.getElementById('title').innerHTML = 'Text to Binary'
        document.getElementById('title-2').innerHTML = 'Insert Text:'

        input.type = 'text'
        input.placeholder = 'Insert Text'
        input.value = ''
        output.innerHTML = ''

        input.addEventListener('keypress', teste)
    }
    else{
        document.title = 'Decimal to Binary'
        document.getElementById('title').innerHTML = 'Decimal to Binary'
        document.getElementById('title-2').innerHTML = 'Insert Decimal:'

        input.type = 'number'
        input.placeholder = 'Insert Decimal'
        input.value = ''
        output.innerHTML = ''

        input.removeEventListener('keypress', text)
    }
}

document.getElementById('toggle').addEventListener('click', () => {
    if(controle == false){
        controle = true
        txtHide.style = 'display: none'
        document.title = 'Binary to Decimal'
        
        document.getElementById('title').innerHTML = 'Binary to Decimal'
        document.getElementById('title-2').innerHTML = 'Insert Binary:'
        
        input.placeholder = 'Insert Binary'
        input.value = ''
        output.innerHTML = ''
        
        input.max = '1'
        input.addEventListener('keypress', teste)
        txtToggle.removeEventListener('change', text)
    }
    else{
        txtHide.style = 'display: flex'
        controle = false
        document.title = 'Decimal to Binary'
        
        document.getElementById('title').innerHTML = 'Decimal to Binary'
        document.getElementById('title-2').innerHTML = 'Insert Decimal:'
        
        input.placeholder = 'Insert Decimal'
        input.value = ''
        output.innerHTML = ''
        
        txtToggle.addEventListener('change', text)
        input.removeEventListener('keypress', teste)
    }
})

function convert(){
    if(input.value == ''){
        output.innerHTML = 'Nothing to output'
    }
    else {  
        if(txtControl == true){
            output.innerHTML = alphabetToBinary(input.value)
        }
        else{
            if(controle == false){
                output.innerHTML = decimalToBinary(input.value)
            }
            else{
                output.innerHTML = binaryToDecimal(input.value)
            }
        }
    }
}

function alphabetToBinary(alphabet){
    let binary = []
    for(let i = 0; i < alphabet.length; i++){
        binary.push(alphabet[i].charCodeAt(0).toString(2))
        binary.push(` `)
    }
    return binary.join('')
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
    if(txtControl == true){
        if(e.code[0] != 'K' && e.code[0] != 'S'){
            output.innerHTML = 'Only letters allowed'
            input.value = ''
        }
    }
    else{
        if(e.key >= 2){
            input.value = ''
            output.innerHTML = 'Invalid binary'
        }
        else{
            return e.key
        }
    }

}