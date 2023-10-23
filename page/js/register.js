const singUpBtn = document.querySelector('.signupBtn')
const loginBtn = document.querySelector('.loginBtn')
const inputBox = document.querySelector('.inputSliding')
const mainBox = document.querySelector('.mainBox')

const signUpBox = document.querySelector('.signupBox')
const loginBox = document.querySelector('.loginBox')

singUpBtn.addEventListener('click', function(){
    inputBox.classList.toggle('active')
    signUpBox.classList.remove('hidden')
    loginBox.classList.add('hidden')
    
})

loginBtn.addEventListener('click', function(){
    inputBox.classList.toggle('active')
    signUpBox.classList.add('hidden')
    loginBox.classList.remove('hidden')
})
