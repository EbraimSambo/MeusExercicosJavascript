const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const operation = document.querySelector(".operation")
const btn= document.querySelector(".btn")
const result = document.querySelector("p")

function calculator(num1, operation, num2) {
    const resultX = 0;
      if (operation === "+") {
         resultX = num1 + num2
         result.textContent = resultX
      } else if (operation === "x") {
         resultX = num1 * num2
         result.textContent = resultX
      } else if (operation === "-") {
         resultX = num1 - num2
         result.textContent = resultX
      } else if (operation === "%") {
         resultX = num1 % num2
         result.textContent = resultX
      } 
}

btn.addEventListener("click", ()=>{
   
  var s = num1.value
  var  o = operation.value
   var p = num2.value
   calculator(s,o, p)
})