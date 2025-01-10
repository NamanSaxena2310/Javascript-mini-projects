const inputField = document.querySelector('#password')
const outputField = document.querySelector('#output')

inputField.addEventListener('input', function(){
  console.log(inputField.value)
  let password = inputField.value
  if (password.length < 8) {
    outputField.innerText = 'Password is too short'
    outputField.style.color = 'red'
  } else {
    outputField.innerText = 'Password is long enough'
    outputField.style.color ='green'
    if (password.search(/[a-z]/) == -1 ) {
      outputField.innerText = 'Passsword is missing a lower case letter'
      outputField.style.color = 'red'
      
    }else if(password.search(/[A-Z]/) == -1){
      outputField.innerText = 'Passsword is missing a Upper case letter'
      outputField.style.color = 'red'
    }else if(password.search(/[0-9]/) == -1){
      outputField.innerText = 'Passsword is missing a Number'
      outputField.style.color = 'red'
    }
    else if(password.search(/[!@#$%^&*(),.?":{}|<>]/) == -1){
      outputField.innerText = 'Passsword is missing a Special Character'
      outputField.style.color = 'red'
    }else{
       outputField.innerText = 'Passsword is Strong'
      outputField.style.color = 'green'
    }
  }

})