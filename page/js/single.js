const rightoptionList = document.querySelectorAll('.rightSide .options div')
const leftoptionList = document.querySelectorAll('.leftSide .options div')

const righttextBox = document.querySelector('.rightSide .textBox')
const lefttextBox = document.querySelector('.leftSide .textBox')

const rightdropDown = document.querySelector('.rightSide .dropDown')
const leftdropDown = document.querySelector('.leftSide .dropDown')


rightoptionList.forEach(function(option) {
    option.addEventListener('click', function(event){
        righttextBox.value = event.target.innerHTML
    })
})

leftoptionList.forEach(function(option) {
    option.addEventListener('click', function(event){
        lefttextBox.value = event.target.innerHTML
    })
})

rightdropDown.addEventListener('click', function(){
    rightdropDown.classList.toggle('active')
})

leftdropDown.addEventListener('click', function(){
    leftdropDown.classList.toggle('active')
})

