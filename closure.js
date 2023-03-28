function outerFunction(outerVariable){
    
    return function innerFunction(innerVariable){
        console.log("Outer Variable "+outerVariable);
        console.log("Inner Variable "+innerVariable);
    }
}

const myFunc = outerFunction("outside")

myFunc("inside")