let btn = document.querySelector('#bottom button')
let inner = document.querySelector('#inner')
let h1 = document.querySelector('#bottom h1')
let time = document.querySelector('#line span')

let percent = 0
btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none'
    let num = 40 + Math.floor(Math.random()*50)
    time.innerHTML = `${num/10}`

    let inn = setInterval(function(){
        percent++
        h1.innerHTML = percent + '%'
        inner.style.width = percent + '%'
        btn.style.backgroundColor = '#b5bbc0ff'
        btn.innerHTML = 'Downloading...'
    }, num)

    setTimeout(function(){
        clearInterval(inn)
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = '#74777aff'
    }, num*100)
})