let score = document.querySelector("#score")
let nuggets = document.querySelector("#nuggets")
let count = 0
let clear_button = document.querySelector("#clr")
let main = document.querySelector("html")
let div = document.querySelector("#div1")


function increase_score() {
    count++
    score.textContent = `Score: ${count}`
    localStorage.setItem("count", count)
    localStorage.setItem("score", score.textContent)
    if(count >= 20 && count < 40) {
        main.style.backgroundColor = "yellow"
    }else if(count >= 40 && count < 60) {
        main.style.backgroundColor = "orange"
    }else if(count >= 60 && count < 80) {
        main.style.backgroundColor = "red"
    }
    if(count == 69){
        let nice = document.createElement("h1")
        nice.textContent = "NICE"
        div.appendChild(nice)
        setTimeout(function(){
            div.removeChild(nice)
        }, 1000)
    }
    localStorage.setItem("color", main.style.backgroundColor )
    img_animation()
}

function img_animation() {
    let random_degree = Math.floor(Math.random() * 90) - 45
    nuggets.style.transform = `rotate(${random_degree}deg) scale(1.1)`
    nuggets.style.transition = 'transform 0.5s'

    setTimeout(change_back, 500) 
}

function change_back(){
    nuggets.style.transform = 'rotate(0deg) scale(1)'
}

function safeload() {
    score.textContent = localStorage.getItem("score")
    count = localStorage.getItem("count")
    main.style.backgroundColor = localStorage.getItem("color")
}

function reload() {
    score.textContent = ""
    count = 0
    localStorage.setItem("score", 0)
    localStorage.setItem("count", 0)
    main.style.backgroundColor = "white"
}













window.onload = safeload
nuggets.addEventListener("click", increase_score)
clear_button.addEventListener("click", reload)