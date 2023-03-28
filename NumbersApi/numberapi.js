const button = document.querySelector("button");
const input = document.querySelector("input");
const currentMsg = document.querySelector("#currentMsg");
const lastSearchDate = document.querySelector("#lastTime");
const lastMsg = document.querySelector("#lastMsg");

const numberFunc = async (input) => {
  const response = await fetch("http://numbersapi.com/" + input);
  const data = await response.text();
  return data;
};

button.addEventListener("click", (e) => {
  if (input.value != "" && !isNaN(input.value)) {
    let number=input.value;
    numberFunc(input.value)
      .then((data) => {
        currentMsg.innerText=data;
        checkSearchedNumber(number);
        addtoLocalStorage(number,data);
      }).catch((err) => {
        console.log("Invalid url.."+err);
      });
  }
  else{
    alert("Enter a number..")
  }
});

const checkSearchedNumber=(number)=>{
    if(localStorage.getItem(number)!=null){
        const localData=JSON.parse(localStorage.getItem(number));
        lastSearchDate.innerText=localData.date;
        lastMsg.innerText=localData.data;
    }
    else{
        lastSearchDate.innerText="None";
        lastMsg.innerText="None";
    }
};

const addtoLocalStorage=(number,trivia)=>{
    let temp={
        date:new Date(),
        data:trivia
    };
    localStorage.setItem(number,JSON.stringify(temp));
};

