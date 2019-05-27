/* JavaScript code here */
console.log("External Javascript")

// Task 2: Array Sum

function sum(arr){
    var sum=0;
    arr.forEach(function(item, index){
        sum=sum+item;
    })
    return sum;
}
console.log(sum([1,2,3,4]))

// Task 3: Email Validation regex
var validateEmail= function validateEmail(email){
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
var validatingEmail= validateEmail('hjhscsdjcd')
console.log(validatingEmail)
console.log(validateEmail('djjeed@task.com'))