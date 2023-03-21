//JSON

const getTodos= function(callback,url){
    const request = new XMLHttpRequest()

    
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
        //console.log(request.responseText);
        callback(undefined,JSON.parse(request.responseText))
       // console.log("Hello");
        }
        else if(request.readyState==4){
           //0 console.log("Could not fetch data");
           callback("Could not fetch data",undefined)
        }
        
    })
    request.open("GET",url)
    request.send()
}
//const uri="https://jsonplaceholder.typicode.com/todos"
const uri="pratham.json"
getTodos((err,data)=>{
    if(err){
        console.log("Error!! :"+err);
    }
    else{
        console.log(data);
    }
},uri)
