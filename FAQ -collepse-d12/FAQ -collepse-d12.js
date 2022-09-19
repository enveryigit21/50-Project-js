
 const toggleBtn = document.querySelectorAll('.faq-toggle')

 toggleBtn.forEach(toogle => {
    toogle.addEventListener('click', () => {
        toogle.parentNode.classList.toggle('active')
      })
}) 
