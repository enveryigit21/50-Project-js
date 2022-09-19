


const open = document.querySelector('.container')
const btnOpen = document.getElementById('open')
const btnClose = document.getElementById('close')

btnOpen.addEventListener('click',function(){
    open.classList.add('show-nav')

})

btnClose.addEventListener('click',function(){
    open.classList.remove('show-nav')
})




