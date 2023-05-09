
//Assignment 1

const obj = {
    name: "angularfeed",
    version: 1
}
obj.prototype = {
    type: "blog"
}
const angObj = Object.create(obj);

console.log(angObj);//{}
//it return empty object because it creates copy in prototype not in direct object
console.log(angObj.prototype);//{type:"blog"} 
//due to prototypal inheritence it is able to access properties defined in obj
console.log(angObj.name); //"angularfeed"
//it returns "angularfeed" because the same copy of value got copied to angObj from obj so whatever defined in obj it is same name property in angObj 
console.log(angObj.prototype.type); //blog
//as  {type:"blog"} this object also got copied so angObj.prototype.type will return blog

const obj1 = {
    name: "angularfeed",
    version: 1
}
const angObj1 = Object.create(obj1);

obj1.prototype = {
    type: "blog"
}
console.log(angObj1); // {}
//it return empty object because it creates copy in prototype not in direct object
console.log(angObj1.prototype); //{type:"blog"}
//due to prototypal inheritence it is able to access properties defined in obj
console.log(angObj1.name); // angularfeed
//it returns "angularfeed" because the same copy of value got copied to angObj from obj so whatever defined in obj it is same name value in angObj 
console.log(angObj1.prototype.type); // blog



//Assignment 2
abc();

function abc () {
    console.log('abc');
}

abc();

function abc() {
    console.log('abc 2')
}

abc();

//Output will be abc2 three times as abc() function gets overriden with latest declaration




 // problem 3
 // Fix this output, by making min chnages

 const arr = [10, 12, 15, 21];

var i = 0 

for (; i < arr.length; i++) {

    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}


//Soultion 1: we can use closure as it will create separate block for each loop and due to closure property it will remember the values passed in to it during setTimeout call 

const arr = [10, 12, 15, 21];

let i = 0 

for (; i < arr.length; i++) {
    (function(){
        let j=i
        setTimeout(function () {
        console.log('Index: ' + j + ', element: ' + arr[j]);
    }, 1000);
    })()
    
}

//Solution2: We can use let keyword while initilaizing for loop.. so it will also create separate block for each iteration 

const arr = [10, 12, 15, 21];

for (let i = 0 ; i < arr.length; i++) {

    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}