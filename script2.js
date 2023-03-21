// //console.log("Hello");
// const div=document.querySelector("div")
// console.log(div);
// const head=document.querySelector("h1")
// console.log(head);
// const head2=document.querySelector("h2")
// console.log(head2);
// const para=document.querySelector("p")
// console.log(para);
// const para2=document.querySelector("#para2")
// console.log(para2);//create an id in HTML for para 2 and access it via #tag

// // const ref=document.querySelector("#para2")
// // ref.innerText="New Para2"//for accessing the leaf nodes or child nodes

// const ref=document.querySelector("div")
// //ref.innerHTML="New Para2"//for accesing the div class directly

// let players=["Sachin","Rohit","Virat","Dhoni","Pant"]

// HTML=``;
// players.forEach((player)=>{
//     HTML+=`<li>${player}</li>`
    
// });

// ref.innerHTML+=HTML


// //For calling all the objects of para
// const paras=document.querySelectorAll("p")
// paras.forEach(para=>{
//     console.log(para.innerText);
// })

// //to find all tag references with class="test"
// const tags=document.querySelectorAll(".test")
// console.log(tags);
// tags.forEach(tag=>{
//     console.log(tag.innerText);
// })

// const err=document.querySelector("div.error")
// console.log(err);
// // err.forEach(e=>{
// //     console.log(e.innerText);
// // })

// //element by id
// const para3=document.getElementById("para2")
// console.log(para3);

// //elemnt by classs name
// const p=document.getElementsByClassName("test")
// //console.log(p);

// //accessing inner text of html collection
// Array.from(p).forEach(tag4=>{
//     console.log(tag4.innerText);
// })

// Array.from(p).forEach(tag4=>{
//     console.log(tag4.innerText+=" demo");
// })

// //get element by tag name
// const tagname=document.getElementsByTagName("p")
// console.log(tagname);

// //Get attribute and set attribute
// const link=document.querySelector("a")
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https:facebook.com")
// link.innerText="Facebook"


// //getting reference oftag by copying tag selector from elements: 
// const idref=document.querySelector("body > div:nth-child(1) > p:nth-child(6)")
// console.log(idref);
// //idref.setAttribute("class","Success")

// //to set new class which actually overrides the class name
// const t1=document.querySelector("h1")
// t1.setAttribute("class","test1")


// //without overiding add the classnames & remove classnames
// const head1=document.querySelector("h1")
// console.log(head1);

// // head1.classList.add("success")
// // head1.classList.remove("test1")

// const p1=document.querySelectorAll("p")
// //p1.setAttribute("class","success")
// p1.forEach(p=>{
//     if(p.innerText.includes("success")){
//     p.classList.add("success");
//     }
//     if(p.innerText.includes("error")){
//         p.classList.add("error")
//     }
// })

const para = document.querySelector("div.error")
//toggle is used  to add and remove
// para.classList.toggle("error")
// para.classList.toggle("error")
console.log(para);

//access child p tags from parent div
const div=document.querySelector("div")
Array.from(div.children).forEach(c=>{
    // console.log(c.p );
    if(c.tagName=="P"){
        c.innerText+=" para";
    }
    })
console.log(div.children);

//access child p tags from parent div(same method in different way)
div.childNodes.forEach(child=>{
    if(child.nodeName=="P"){
        child.innerText+=" Hello"
    }
})

//how to access child to parent
const head3=document.querySelector("h2")
console.log(head3.parentElement)//.parentElement);
console.log(head3.nextElementSibling)//nextElementSibling);
console.log(head3.previousElementSibling);
