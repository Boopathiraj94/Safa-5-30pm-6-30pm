

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

for (let i = 1; i <= 10; i++) {
    debugger;

    if (i % 2) {
        document.writeln(i, "<span style='color:red'> ODD </span> <br>")
    } else {
        document.writeln(i, "<span style='color:green'> EVEN </span> <br>")
    }


}

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
  

*/