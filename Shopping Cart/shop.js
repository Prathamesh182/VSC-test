const item = document.getElementById("item");
const quantity = document.getElementById("quantity");
const unitPriceInput = document.querySelector('input[readonly]');
const button1 =document.querySelector("button")
const shoppingListTable = document.querySelector('table');
const shoppingListTableBody = document.querySelector('tbody');
const removeButtons = document.querySelectorAll('button');


const products = [
  { name: "Parle Biscuit", price: 10 },
  { name: "Sunfeast Biscuit", price: 15 },
  { name: "Nestle Biscuit",price: 25},
  { name: "Britania Biscuit",price: 45}
];


item.addEventListener("change", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    unitPriceInput.value = selectedItem.price;
  });
  
  
  button1.addEventListener("click", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    const subTotal = selectedItem.price * quantity.value;
    
    const newRow = shoppingListTableBody.insertRow();
    let productcart = []
    

    newRow.innerHTML = `
      <td>${selectedItem.name}</td>
      <td>${quantity.value}</td>
      <td>${selectedItem.price}</td>
      <td>${subTotal}</td>
      <td><button>Remove</button></td>`;
      productcart.push(selectedItem.name,quantity.value )
      console.log(productcart)   
    const newRemoveButton = newRow.querySelector('button');
    newRemoveButton.addEventListener("click", () => {
      newRow.remove();
      updateTotal();
    });

    
    
    
    item.value = "Parle Biscuit";
    unitPriceInput.value = "";
    quantity.value = "";

    function updateTotal(){
      let total=0
      const cartTotal = document.querySelector("#total")
      productcart.forEach(line => {
        total+=line.subTotal  
        
      });
      cartTotal.innerText = "Total Cart Value : " + total + " Rs.";
    }
    
  });


  

  // const localData = JSON.parse(localStorage.getItem(productcart))
  // shoppingListTable.innerText=localData.newRow

  
  // const addtoLocalStorage=(productcart)=>{
  //     let temp={
  //       newRow:new newRow()
        

  //     }
  //     localStorage.setItem(productcart,JSON.stringify(temp))
  // }

  // addtoLocalStorage(newRow) 





  
  


