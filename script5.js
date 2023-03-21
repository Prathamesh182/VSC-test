
//Asynchronous JS
// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(()=>{
//     console.log("CallBack Function called..");
// },2000)

// console.log(4);
// console.log(5);
// console.log(6);

//XHR XMLHttpRequest
//makes request to get data from api endpoints
/*readyState
0 : Unsent
1 : Open
2 : Received Headers
3 : Loading
4 : Complete*/

const getTodos= function(url){
    const request = new XMLHttpRequest()

    //if url is wrong then follow the if else code
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
        console.log(request.responseText);
        console.log("Hello");
        }
        else if(request.readyState==4){
            console.log("Could not fetch data");
        }
        
    })
    request.open("GET",url)
    request.send()
}

getTodos("https://jsonplaceholder.typicode.com/todos")
