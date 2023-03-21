//implements promise

// fetch("pratham.json")
// console.log(fetch("pratham.json"));

fetch("pratham.json").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    return fetch("pratham.json")
}).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Some err occured could not fetch data");
})
