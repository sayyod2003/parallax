const boat = document.querySelector('.boat'),
    clouds = document.querySelectorAll('.cloud'),
    fantasy = document.querySelector('.fantasy');


window.addEventListener('scroll', function () {
    boat.style.transform = `translateX(${window.scrollY}px)`
    clouds.forEach(el => {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${window.scrollY * speed}px)`
    })
    fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`
})
class TYPE {
    constructor(obj) {
        this.el = document.querySelector(obj.el)
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ''
        this.type()
    }
    type(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (this.text.length > i) {
            setTimeout(() => {
                this.type(i)
            }, 100);
        }
    }
}
const typeTitle = new TYPE({
    el: '.header__title'
})
const paralax__box = document.querySelector('.paralax__box')
layer = document.querySelectorAll('.layer');
paralax__box.addEventListener('mousemove', function (e) {
    let x = e.pageX
    let y = e.pageY
    layer.forEach(el => {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translate(${(x / 100) * speed}px, ${(y / 100) * speed}px)`
    })
})

const timer = document.querySelector('.timer'),
    timerNum = document.querySelectorAll('.timer__title');
let time = 50
window.addEventListener('scroll', function timerCount(e) {
    if (window.scrollY + this.window.innerHeight > timer.offsetTop) {
        timerNum.forEach(el => {
            let timerAttribute = el.getAttribute('data-timer')
            function count(i = 0) {
                el.innerHTML = i
                i++
                if (timerAttribute >= i) {
                    setTimeout(() => {
                        count(i)
                    }, time);

                }
                if (i > 100) {
                    time = 100
                }

            }
            count()
        })
        window.removeEventListener('scroll', timerCount)
    }
})

const input = document.querySelector('.list__input'),
    btnAdd = document.querySelector('.list__content button'),
    list = document.querySelector('.list__list');

btnAdd.addEventListener('click', function () {
    if (input.value != '') {
        add()
    }
})
function add() {
    let li = document.createElement('li')
    list.append(li)
    li.classList.add('list__item')
    li.innerHTML = input.value
    let span = document.createElement('span')
    li.append(span)
    span.classList.add('remove')
    span.innerHTML = 'X'
    input.value = ''
}   

list.addEventListener('click', function(e) {
    let btn = e.target
    if (btn.classList.contains('remove')) {
        btn.closest('.list__item').remove()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter' && input.value != '') {
      add() 
    }
})