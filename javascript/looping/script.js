

// let i = 10; // initial

// while (i >= 1) { // true

//     document.writeln(i, "<br>");
//     // i++;
//     // i*2;
//     i = i - 2;
// }
/*
s1 => (10 >=1) => true => 10 => i= 10-1 =>i = 9;

*/
// 2 - 10
// 3 - 9

// 10 - 1

// do ...while

/*
initial
do{
increment / decrement
}while(condition);

*/
// let i = 1;
// do{

//     document.writeln("safa")
// }while(i>=10);

/*

syntax
=======

for(initialization;condition;increment/decrement){
  // block of code
}

*/

// for (let i = 1; i <= 10; i++) {


//   if (i % 2) {
//     if (i == 5) {
//       document.writeln(i, "<span style='color:red'> Father Name </span> <br>")
//     }
//     else {
//       document.writeln(i, "<span style='color:red'> SAFA </span> <br>")
//     }
//   }
//   else {
//     if (i == 10) {
//       document.writeln(i, "<span style='color:red'> Mother Name </span> <br>")
//     } else {
//       document.writeln(i, "<span style='color:green'> SANA </span> <br>")
//     }

//   }


// }

/*
  1 safa
  2 sana
  3 safa
  4 sana
  5 father name
  6 sana
  7 safa
  8 sana
  9 safa
  10 Mother name


  nested for

  pattern 

  * * * * * 
  * * * * 
  * * * 
  * * 
  *  
  
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
  
 case 1 => account create => name, phone , address ,  account no , initial deposit amount => 500
 case 2 => amount deposit => account no === accno
 case 3 => amount withdraw => account no === accno
 case 4 => balance check => account no === accno
 case 5  => exit
 default 
*/
let name, phone, address, acc_no;
let amount = 0;
let ischeck = true;
while (ischeck) {
  let op = prompt("Enter your option \n 1 . create Account \n 2.Deposit \n 3. withdrawal \n 4. Balance Check \n 5. exit Account")
  switch (op) {

    case "1":
      name = prompt("Enter your Name?")
      phone = prompt("Enter your Phone?")
      address = prompt("Enter your Address?")
      acc_no = prompt("Enter your account No?")
      let amt1 = Number(prompt("Enter Amount?"));
      amount += amt1; // amount = amount+500;
      break;

    case "2":
      let ano = prompt("Enter account No?");
      if (acc_no === ano) {
        alert("Account no matched successfully")
        let amt = Number(prompt("Enter amount?"));
        amount += amt;
        alert("Amount Deposited  successfully")
      } else {
        alert("account does not match!!!.")
      }
      break;

    case "3":
      let ano1 = prompt("Enter account No?");
      if (acc_no == ano1) {
        alert("Account no matched successfully Your amount is Rs: " + amount);
        let getAmount = prompt("Enter your Amount?");
        if (amount < getAmount) {
          alert("Insufficient fund!..")
        } else {
          amount -= getAmount;
          alert("Amount Withdraw  successfully")
        }

      }
      break;

    case "4":
      console.log("==========================");
      console.log(" Name : " + name + "");
      console.log(" Phone : " + phone + "");
      console.log(" Address : " + address + "");
      console.log(" account No : " + acc_no + "");
      console.log("Amount : " + amount + "");
      console.log("==========================");
      break;

    case "5":
      ischeck = false;
      break;

    default:
      console.log("invalid option 1- 5");
      break;


  }

}