const obj = {
    name: "angularfeed",
    version: 1
}
obj.prototype = {
    type: "blog"
}
const angObj = Object.create(obj);
console.log(angObj);
console.log(angObj.prototype); s
console.log(angObj.name); 
console.log(angObj.prototype.type); 

const obj1 = {
    name: "angularfeed",
    version: 1
}
const angObj1 = Object.create(obj1);

obj1.prototype = {
    type: "blog"
}
console.log(angObj1); // {}
console.log(angObj1.prototype); // {}
console.log(angObj1.name); // angularfeed
console.log(angObj1.prototype.type); // blog


Assignment 2
abc();

function abc () {
    console.log('abc');
}

abc();

function abc() {
    console.log('abc 2')
}

abc();

/////

 def();

var def = function() {
    console.log('def');
}

var def = function() {
    console.log('def 2');
}

def();




 // problem 3

 const arr = [10, 12, 15, 21];

var i = 0 

for (; i < arr.length; i++) {

    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}

// Fix this output, by making min chnages

 const arr = [10, 12, 15, 21];

let i = 0 

for (; i < arr.length; i++) {

    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}