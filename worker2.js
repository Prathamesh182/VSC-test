const sumbutton=document.querySelector("#sum")
const colorbutton=document.querySelector("#color")
const worker = new Worker("webworker.js")

sumbutton.addEventListener('click',()=>{
    worker.postMessage("test")
})

worker.onmessage=(result)=>{
alert("Sum is :"+result.data)
}
colorbutton.addEventListener('click',(e)=>{
    if(document.body.style.backgroundColor!="green"){
        document.body.style.backgroundColor="green"
    }
    else{
        document.body.style.backgroundColor="cyan"
    }
})