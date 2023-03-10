// // alert("Hello World")
// console.log("Hello world")
// let value=20
// console.log(typeof value )
// value = "Ajay"

console.log(typeof value);
// var age=23
// console.log(age)
const age = 40
console.log(age);
//String
let name="JAY"
let lname="Mane"

let Fullname=name+""+lname;
console.log(Fullname);
console.log(name[1]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let email="jay.mane@gmail.com"
//to get domain from emailID
console.log(email.substring(email.indexOf("@")+1))
console.log(email.substring(3,8));
console.log(email.slice(-8));
let result=email.replace("mane","kaane")
console.log(email);
console.log(result);

//Title String
const title="Programming Basics"
const author="Prathamesh Bhatkar"
const likes=300

const strResult = title+" by "+author+" has "+likes+"likes"
console.log(strResult);

//by using template String
const authorResult=`${title} by ${author} has ${likes} likes`
console.log(authorResult);

//template string to create HTML content

// let HTML=`<h1>Title page</h1><h2>${title}</h2><p>${author}</p><p>${likes}</p>`
// console.log(HTML);

// undefined and null
// let highscore;

// console.log(highscore+100)
// let value=null
// console.log(value+100);

// //Arrays
// let players=["Sachin","Rohit","Virat","Dhoni"]
// console.log(players.length);
// console.log(players.indexOf("Pant"));
// players.push("Shreeyas")
// console.log(players);
// console.log(players.pop());
// console.log(players.includes("Sachin"))

//loose vs strict comparison
let age1=30
let score="30"
console.log(typeof age1);
console.log(typeof score);
console.log(age1==30);
console.log(age1==score);//loose comparison in which type is ignored
console.log(age1===score);

//type Conversion
let score1='100'
let test=Number(score1)
console.log(typeof test);
console.log(test);

let result1=String(50)
console.log(typeof result);

let result2=Boolean("100")
console.log(result2);


//functions
function greet(user){
    console.log("Hello From Function"+user);
}
greet("Manish")

function addNumbers(a,b){
   // console.log("Addition is "+(a+b));
    return a+b

}

console.log("Addition is "+addNumbers(10,20))

//function expression
const greetings= function(){
    console.log("Good Morning all..");
}
greetings();

//function hoisting
//functions are hoisted at the top of files whereas the function expression are not
//hence functions can be called before they are defined

//Default Parameters

const speak = function(name='Babita Ji',time='Night'){
    console.log(name+' says Good'+time);
}
speak()

//area of circle

const circleArea=function(radius){
    return 3.14*radius*radius
}
console.log(circleArea(10));

//using arrow functions
const circleArea1=radius=>3.14*radius*radius

console.log(circleArea1(20));

const bill=(product,tax)=>{   
     let total=0
    for(let i=0;i<product.length;i++){
        total+=product[i]*product[i]*tax
    }
    return total
}
console.log(bill([10,20,30,40],0.1));


//callback method
const myFunction=(callBackFunc)=>{
    callBackFunc(50)
}
myFunction((value)=>{
    console.log("Calling callBackFunc");//passing a method as argument  
    console.log(value);
});

//for Each Method
let players=["Sachin","Rohit","Virat","Dhoni","Pant"]
// players.forEach((p,i)=>{
//     console.log(p+" "+i );
// })



//ul tag
const ul=document.querySelector("ul")
HTML=``;
players.forEach((player)=>{
    HTML+=`<li>${player}</li>`
    
});
ul.innerHTML=HTML

//Object Literals:they are constant objects because value is already defined
let useer ={
    name:"Prathamesh",
    age:"22",
    email:"prathameshbhatkar@gmail.com",
    blogs:['Js in 2 hrs','java in 1hrs','html in 30 mins']
}
//.notation to access object members
console.log(useer.blogs[2]);
//square bracket notation to access object members
console.log(useer['name']);


//adding methods to objects & Array Of Objects

let user1 ={
    name:'Virat',
    age:'31',
    email:'viru@gmail.com',
    blogs:[{


        title :"java in 24hrs",
        likes:150
    },
    {
        title :"Cooks in 24hrs",
        likes:300
    },
    {
        title :"Learns in 24hrs",
        likes:500
    },
    {
        title :"Invesst in 24hrs",
        likes:1000  
    }
    ]
    ,
    login: function(){
        console.log(this.name+' logged in');
    },
    logout:function(){
        console.log(this.name+' logged out');
    },
    logBlogs:function(){
        this.blogs.forEach(blog=>console.log(blog)  )

        
            
     }
};


user1.login()
user1.logout()
user1.logBlogs()

//Array of objects

// let blogs=[{


//     title :"java in 24hrs",
//     likes:150
// },
// {
//     title :"Cooks in 24hrs",
//     likes:150
// },
// {
//     title :"Learns in 24hrs",
//     likes:150
// },
// {
//     title :"Invesst in 24hrs",
//     likes:150  
// }
// ]
