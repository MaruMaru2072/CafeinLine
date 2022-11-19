var form = document.forms['orderForm']
var errorName = document.getElementById('error-name')
var errorEmail = document.getElementById('error-email')
var errorPhonenumber = document.getElementById('error-phonenumber')
var errorComments = document.getElementById('error-comments')

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

    if(form['phonenumber'].value == ""){
        errorPhonenumber.innerText = "* Required Field"
        isValid = false
    }

    if(form['comments'].value == ""){
        errorComments.innerText = "* Required Field"
        isValid = false
    }
    
    if(isValid == false){
        ev.preventDefault()
    }else{
        alert('Your form has been submitted, thank you!')
    }

    
}