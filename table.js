fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})