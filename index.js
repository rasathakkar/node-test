// console.log("Hello world");


// const add = (a,b) => {return a+b}

// const print = (sum) => {console.log(sum)}

// const sum = add(2,3)
// console.log(sum);

console.log("Before Timeout");

setTimeout(() => {
    console.log("Inside Timeout");
},3000)

console.log("After Timeout");