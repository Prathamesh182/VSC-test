/*
Modules in JS : we can create classes and methods and export
it, so that it can be imported and used in other JS files
*/


class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

function printName(user){
    console.log("User Name : "+user.name);
}

function printAge(user){
    console.log("User Age : "+user.age);
}

export default User
export{printName,printAge}
