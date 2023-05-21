const btn = document.querySelector(".btn")
const paragaraf1 = document.querySelector(".p")
const paragaraf2 = document.querySelector(".p2")

function alert1() {
    paragaraf1.textContent = "Ativei 1"
   
}

function alert2() {
    paragaraf2.textContent = "Ativei 2"
}

btn.addEventListener("click",() =>{
        alert1()
        alert2()
})