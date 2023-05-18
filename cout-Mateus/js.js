const TextBox = document.querySelector(".textBox")
const result = document.querySelector("p")
const button = document.querySelector("#toggle")
let mode = "caracters"

button.addEventListener("click", ()=>{
   if (mode === "caracters") {
      mode = "word"
      button.textContent = "Contar Caracters"
   } else {
      mode = "caracters"
      button.textContent = "Contar Palavras"
   }
})

TextBox.addEventListener("input",()=>{
   if (mode === "caracters") {

   const values = TextBox.value;
   result.innerHTML = "Foram escritas: " + values.length + " Caracteres";

   } else {
      const words = TextBox.value.trim().split(/\s+/)
      result.innerHTML = words.length  + " Palavras";

   }

 
})