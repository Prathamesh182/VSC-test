//console.log("hello");
const sumbutton=document.querySelector("#sum")
const colorbutton=document.querySelector("#color")

sumbutton.addEventListener('click',(e)=>{
    let sum=0
    for(let i=1;i<=1000000000;i++){
        sum+=i
    }
    alert("Sum = "+sum)
})

colorbutton.addEventListener('click',(e)=>{
    if(document.body.style.backgroundColor!="green"){
        document.body.style.backgroundColor="green"
    }
    else{
        document.body.style.backgroundColor="cyan"
    }
})