const addbutton = document.querySelector("button")
const ul=document.querySelector("ul")

// addbutton.addEventListener("click",e=>{
//     const li=document.createElement("li")
//     li.innerText="New Player"
//     ul.appendChild(li)
// })

//  html=``

// addbutton.addEventListener("click",e=>{
//     html+=`<li>New Player</li>`
//     ul.innerHTML+=html
//     html=``
// })

// const list=document.querySelectorAll("li")
// //console.log(list);
// list.forEach(l=>{
//     l.addEventListener('click',e=>{
//         // console.log(l.innerText);
//         //ul.removeChild(li)
//         e.target.remove()
//     })
// })

ul.addEventListener('click',e=>{
    if(e.target.localName=="li")
    console.log(e.target.remove());
})

const input=document.querySelector("input")
console.log(input);
addbutton.addEventListener("click",e=>{
   
    //console.log(addbutton);
    // const input1=document.createElement("li") 
   
    // input1.innerText=input.value
   
    // ul.appendChild(input1)
    
    // input.value=""

 document.getElementById("line2").value=document.getElementById("line1").value
 
    
})