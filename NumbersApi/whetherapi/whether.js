function getWeather(){
    event.preventDefault()

    let city =document.getElementById("city").value
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3a5e5598ebfc84548b8a40b818c4d21`;
fetch(url)
.then((response)=>response.json())
.then((data)=>{
    let temp = data.main.temp -273.15
    temp = temp.toFixed(2)
    document.getElementById("result").textContent=`weather in ${city} is ${temp} C` 
});

}





//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//e3a5e5598ebfc84548b8a40b818c4d21