

let checkCount = () =>{
    let m =   document.getElementById("message")
  
      m = m.value;

    console.log(m)

      let count = m.length;

      document.getElementById("length").innerText = `Letter Count: ${count}`;
}

checkCount()

let focusClr = () =>{
     let m =   document.getElementById("message")

     m.style.backgroundColor ="orange"

}


let blurClr = ()=>{
     let m =   document.getElementById("message")

     m.style.backgroundColor ="white"

}


let bgColor1 = () =>{
    let b = document.getElementById("bg-clr").value

    console.log(b)

    document.body.style.background = b;


}


let datasend = () =>{
    alert("Submitted successfully")
}