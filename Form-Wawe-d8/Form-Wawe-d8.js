const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
   .split(" ")  //virgülleri silmek için boşluğu aç 
           .map ((letter, idx) => `<span style="transition-delay:${idx * 30}ms ">${letter}</span>`)
           
         
})

