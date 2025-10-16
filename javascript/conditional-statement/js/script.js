
/*
if(condition){
  // block of code
}

student 50 and above  >= 50

if(condition){

}else{

    }

*/

// let mark = prompt("Enter your mark?")
// debugger;
// if(mark >=50){
//     document.writeln("<h1>You are Pass</h1>")
// }else{
//     document.writeln("<h1>You are fail , sorry</h1>")
// }

// odd even
// driving licence = >  17 and above
// negative or positive number
// 

// let mark = prompt("enter your mark?")
// debugger;
// // (condition) ? true block : false block ;
// (mark >=50) ? document.writeln("<h1>You are Pass</h1>")  : document.writeln("<h1>You are fail , sorry</h1>");

// else-if ladder

/*

if(condition1){

}
else if(condition2){

}
else if(condition3){

}else{
  
}

1-12 => child
13-19 => teenagers
20 - 50 => adult
50 above => aged peoples seniour

*/

let age = prompt("enter your Age?")

// if (age >= 1 && age <= 12) {
//   console.log("child");
// }
// else if (age >= 13 && age <= 19) {
//   console.log("teenages");
// }
// else if (age >= 20 && age <= 50) {
//   console.log("adult")
// }
// else if (age >= 51) {
//   console.log("aged peoples")
// }
debugger;
if (age > 0 && age <= 100) {
  if (age <= 12) {
    console.log("child");
  }
  else if (age <= 19) {
    console.log("teenages");
  }
  else if (age <= 50) {
    console.log("adult")
  }
  else if (age >= 51 && age <= 100) {
    console.log("aged peoples")
  }
  // else if (age >= 101) {
  //   console.log("above 101 age is not allowed")
  // }
} else {
  if (age < 0) {
    console.log("negative age is not allowed")
  }else if(age >= 101){
    console.log("above 101 age is not allowed")
  }else{
    console.log("zero is not allowed")
  }

}


let uname ="safa";
let pass = "safa@123";

// uname wrong but password is correct =
// uname correct but password is wrong =
// 1.	Biggest number of 3 values
// 2.	Username and password check




// console.log("exit")

/*
if (condition1) 
{
   // Executes when condition1 is true
   if (condition2) 
   {
      // Executes when condition2 is true
   }
}


*/
