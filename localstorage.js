localStorage.setItem("1","Prathamesh")
localStorage.setItem("2","Akshay")
localStorage.setItem("3","Amogh")

console.log(localStorage.getItem("1"));
localStorage.clear();

console.log(localStorage.getItem("1"));

// const id=[]
const student = [ 
    "prathamesh",
    "Akshay",
    "Amogh",
    "Sankalp"
]
localStorage.setItem("student",JSON.stringify(student))
const studentNames=(JSON.parse(localStorage.getItem("student")))

const players=[
    {
        
        name:"amogh",
        score:22
    },
    {
        
        name:"prathamesh",
        score:23
    },
    {
        
        name:"sankalp",
        score:24
    }
]

localStorage.setItem("players",JSON.stringify(players))
const playerNames=(JSON.parse(localStorage.getItem("players")))