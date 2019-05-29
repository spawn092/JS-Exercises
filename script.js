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

// objects example

var company = {
    name: 'Google', 
    age: 19, 
    ceo: {
    first_name: 'Sundar', 
    last_name: 'Pichai'
    }
    };
   // console.log(company)
    company.updateAge= function(newAge){
        this.age= newAge;
    }
    company.updateAge(23);
    delete company.age;
    console.log(company)
    //console.log(company.age)


    //Task-4: Acsess object property at a specific index of array

    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];
//function getReadingStatus(index){
    function getProp(index, prop){
    //return library[index].readingStatus
    return library[index][prop]

}   
//console.log(getReadingStatus(1)) 
console.log(getProp(1, 'author'))

    