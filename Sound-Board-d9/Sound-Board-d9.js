

const sounds = ['müzik1', 'müzik2', 'müzik3', 'müzik4', 'müzik5']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', function(){

        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})


function   stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}
