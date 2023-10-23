const contactUs = [
    '09370303787',
    'تهران، شهرک دریا خیابان تهران ، مستفیم به تهران',
    'T.me/Telgram'
]


const $ = document;
const infoBox = $.querySelector('.infoBox')
const leftDoor = $.querySelector('.leftDoor')
const rightDoor = $.querySelector('.rightDoor')
const infoContact = $.querySelector('.infoContact')
const infoContactHead = $.querySelector('.infoContactHead')
const closeBtn = $.querySelector('.closeBtn')

const numberBox = $.querySelector('.number')
const addressBox = $.querySelector('.address')
const telegramBox = $.querySelector('.telegram')

numberBox.addEventListener('click', function(event){
    leftDoor.classList.add('active')
    rightDoor.classList.add('active')
    infoBox.classList.add('hidden')
    infoContactHead.innerHTML = event.target.innerHTML
    infoContact.innerHTML = contactUs[0]
    

})

addressBox.addEventListener('click', function(event){
    leftDoor.classList.add('active')
    rightDoor.classList.add('active')
    infoBox.classList.add('hidden')
    infoContactHead.innerHTML = event.target.innerHTML
    infoContact.innerHTML = contactUs[1]
    
})

telegramBox.addEventListener('click', function(event){
    leftDoor.classList.add('active')
    rightDoor.classList.add('active')
    infoBox.classList.add('hidden')
    infoContactHead.innerHTML = event.target.innerHTML
    infoContact.innerHTML = contactUs[2]
    
})

closeBtn.addEventListener('click', function(){
    leftDoor.classList.remove('active')
    rightDoor.classList.remove('active')
    infoBox.classList.remove('hidden')
})