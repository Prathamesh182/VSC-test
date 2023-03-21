const func=async()=>{
// fetch("pratham.json").then((response)=>{
//     return response.json()
// }).then(data=>{
//     return data
// }).catch(err=>{
//     console.log("err");
// })

const response=await fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students")
if(response.status!=200){
    throw new Error(" :Invalid Url")
}
const data=await response.json()
// console.log(data);
return data

//for chaining
// const response1=await fetch("pratham.json")
// const data1=await response1.json()
// return data1
}

func().then((data)=>{
console.log(data)
printData(data)
}).catch(err=>{
    console.log("could not fetch data"+err);
})

const table = document.querySelector("table")
console.log(table);

const printData=(data)=>{
    let html=``
    data.forEach(d => {
        html=`<tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.rollNo}</td>
        <td>${d.email}</td>
        <td><button>Delete</button></td>
        </tr>`
        table.innerHTML+=html
        
    });
}
