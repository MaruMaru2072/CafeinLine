var form = document.forms['orderForm']
var errorName = document.getElementById('error-name')
var errorEmail = document.getElementById('error-email')
var errorCity = document.getElementById('error-city')
var errorAddress = document.getElementById('error-address')
var errorPaymentmethod = document.getElementById('error-paymentmethod')
var errorAgree = document.getElementById('error-agree')
var cardnumber
var validity
var cvvnumber
var confirmvisa

function validateForm(ev){
    var isValid = true
    if(form['name'].value == ""){
        errorName.innerText = "* Required Field"
        isValid = false
        
    }

    if(form['email'].value == ""){
        errorEmail.innerText = "* Required Field"
        isValid = false
    }

    if(form['city'].value == ""){
        errorCity.innerText = "* Required Field"
        isValid = false
    }

    if(form['address'].value == ""){
        errorAddress.innerText = "* Required Field"
        isValid = false
    }

    if(form['paymentmethod'].value == "0"){
        errorPaymentmethod.innerText = "* Required Field"
        isValid = false
    }
   

    if(form['agree'].checked == false){
        errorAgree.innerText = "* Required Field"
        isValid = false
    }

    if(form['paymentmethod'].value == "visa"){
        cardnumber = prompt('enter your card number')
        validity = prompt('Enter your card expiration date (MM/YY)')
        cvvnumber = prompt('Enter your CVV number')
        confirmvisa = confirm('Card Number :'+ cardnumber + '\n' + 'validity : '+ validity + '\n' + 'cvvnumber : '+ cvvnumber)
        if(confirmvisa == true){
            isValid == true
        }
    }

    if(isValid == false){
        ev.preventDefault()
    }else{
        alert('thank you!')
    }

    
}

