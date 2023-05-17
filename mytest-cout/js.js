const TextBox = document.querySelector(".textBox")
const result = document.querySelector("p")

TextBox.addEventListener("keyup",()=>{
   const values = TextBox.value;
   result.innerHTML = "Foram escritas: " + values.length + " Caracteres";
 
})