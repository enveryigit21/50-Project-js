const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const mesages  = [
    'Mesage "Başarısız"',
    'Mesage Two',
    'Mesage Three',
    'Mesage Four'
]

button.addEventListener('click', () => createPopup())

 function createPopup() {
    const ekle = document.createElement('div')
    ekle.classList.add('toast')
    toasts.append(ekle)
    ekle.innerText = randomFunc()
   
    setTimeout(() => {
        ekle.remove()
    },3000)

    
}

 function randomFunc() {
     return mesages[Math.floor(Math.random() * mesages.length)]
 }