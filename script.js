let btn = document.querySelector('#bottom button')
let inner = document.querySelector('#inner')
let h1 = document.querySelector('#bottom h1')
let time = document.querySelector('#line span')

let percent = 0
btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none'
    let num = 30 + Math.floor(Math.random()*100)
    time.innerHTML = `${num/10}`
    btn.style.backgroundColor = '#b5bbc0ff'
    btn.innerHTML = 'Downloading...'

    let inn = setInterval(function(){
        percent++
        h1.innerHTML = percent + '%'
        inner.style.width = percent + '%'
    }, num)

    setTimeout(function(){
        if (percent >= 100) { clearInterval(inn) }
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = '#74777aff'
    }, num*100)
})