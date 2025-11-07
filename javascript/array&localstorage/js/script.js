 let marks;
 let getStorage = () => {
     marks = localStorage.getItem("marks")
     // console.log(marks)
     marks = JSON.parse(marks)
     // console.log(marks)
 }

 getStorage();

 let totalSubjectmarks = [];
 let addSubjectMark = () => {
     // debugger; 

     let idx = document.getElementById("subject_index").value;
     console.log(idx)
     let m = document.getElementById("mark").value;
     let s = document.getElementById("subject_name").value;
     if (idx) {
         // update?

         let data = marks.map((ele, index) => {

             if (index == idx) {
                 // return ele.subjectname = s, ele.mark = m

                 return {
                     ...ele,
                     subjectname: s,
                     mark: m
                 }
             }
             return ele;


         })

        //  console.log(data)
         localStorage.setItem("marks", JSON.stringify(data));

     } else {


         let subObj = {
             "subjectname": s,
             "mark": m
         };

         totalSubjectmarks.push(subObj)
         localStorage.setItem("marks", JSON.stringify(totalSubjectmarks));

     }

     getStorage();
     loadList()


 }



 let loadList = () => {
     let row = '';
     if (marks && marks.length >= 1) {
         //  for (let val of marks) {
         //      row += ` <tr>
         //         <td>1</td>
         //         <td>${val.subjectname}</td>
         //         <td>${val.mark}</td>
         //     </tr>`;
         //  }
         console.log(marks)
         marks.forEach((element, i) => {
             row += ` <tr>
                <td>${i+1}</td>
                <td>${element.subjectname}</td>
                <td>${element.mark}</td>
                 <td>
                    <button onclick="editData(${i})" >Update</button>
                    <button onclick="deleteData(${i})" >Delete</button>
                </td>
            </tr>`
         });

      let totalMark =     marks.reduce((sum, next)=>{
              return  sum+=Number(next.mark)
         },0)

         row+=` <tr>
                <td colspan="2">Total</td>
                <td>${totalMark}</td> 
            </tr>`



     } else {
         row += `<tr>
            <td colspan="4" align="center">No Record found</td>
        </tr>`
     }

     let tbody = document.getElementById("loadSubject")
     tbody.innerHTML = row;

 }


 loadList()

 let editData = (idx) => {
     // alert(idx)

     let fdata = marks.filter((ele, index) => index == idx)
     console.log("before", fdata)
     let [data] = fdata;

     console.log("after", data)

     document.getElementById("mark").value = data.mark;
     document.getElementById("subject_name").value = data.subjectname;
     document.getElementById("subject_index").value = idx;


 }


 let deleteData = (idx) => {
     // alert(idx)

     let fdata = marks.filter((ele, index) => index != idx)
     console.log(fdata)

     localStorage.setItem("marks", JSON.stringify(fdata));
     getStorage();
     loadList()
     Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Your work has been saved",
         showConfirmButton: false,
         timer: 1500
     });

 }

 /*
 let arr = [10,30,50]

 let [a,,b] =arr

 looping
 array.forEach((element,index,array)=>{
     
     
     })

     element => mandatory

     optional
     index
     array

array.filter((element,index,array)=>{
    })


let arr = [10,50,90,80,70];

array.map((ele,index, array)=>{

    })


array.reduce((sum,next)=>{
    
    },0)

+=
 */

// let ar = [10,50,60,80,90,80]

// /*
// 10+50 => 60

// */
// console.log(ar)

// let a=   ar.reduce((sum,next)=>{
//     // console.log(sum next)

//   return  sum+=next;

// },0)

// console.log(a)