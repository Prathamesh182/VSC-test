function createCustomer(){
    let customer={}

    let _id,_name;

    customer.setID=function(id){
        _id=id
    }
    customer.setName=function(name){
        _name=name
    }
    customer.getDetails=function(){
        return "ID "+_id+" and Name :"+_name 
    }
    return customer

}

let customer = createCustomer()
customer.setID(10)
customer.setName("Prathamesh")
console.log(customer);
console.log(customer.getDetails());