

 let currentdate = new Date();

 let cyear = currentdate.getFullYear()
 let cm = currentdate.getMonth()
 let cdate = currentdate.getDate()

//  console.log(cyear , cm , cdate)

 if(cdate >=1 && cdate <=9){
    cdate = "0"+cdate;
 }
 if(cm >=1 && cm <=9){
    cm = "0"+cm;
 }
let curdate = document.getElementById("currentdate");
 curdate.value = `${cyear}-${cm}-${cdate}`;


let birthdate =  document.getElementById("birthdate")

birthdate.addEventListener("change",()=>{
    // alert("safa")

    // console.log(birthdate.value)
    // console.log( curdate.value)
    let nowdate = new Date(curdate.value)
    let bdate = new Date(birthdate.value)

     let cyear=    nowdate.getFullYear()
    let byear =    bdate.getFullYear()
    let cmonth=    nowdate.getMonth()
    let bmont =    bdate.getMonth()
    let cday=    nowdate.getDate()
    let bday =    bdate.getDate()

    let ayear =   cyear - byear
    let amonth = cmonth - bmont
    let aday = cday - bday;
    aday  = Math.abs(aday)

    console.log(ayear , amonth , aday)
 document.querySelector("#getfullage").innerText = `${ayear} year ${amonth} month ${aday} day`
    //     let bdate = new Date('2002-01-01')
})