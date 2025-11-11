
let ptext = document.querySelector("#text")


let  red_clr =  document.querySelector("#red-color")

red_clr.addEventListener("click",()=>{
    //  ptext.classList.add('txt-red')
    ptext.classList.toggle('txt-red')
})

let new_font = document.querySelector(".new-font")

new_font.addEventListener("click",()=>{
     ptext.classList.toggle('new-font1')
})

let bg_color = document.querySelector(".bg-color")

bg_color.addEventListener("click",function(e){
    console.log(e)
    e.preventDefault();
    ptext.classList.toggle('bg-blue')


})

// let remove_red = document.querySelector("#red-color1")

// remove_red.addEventListener("click",()=>{
//     ptext.classList.remove("txt-red")
// })