const fruits = [];
fruits.push("banana", "apple", "grapes", "watermelon")
console.log(fruits.length)
fruits[6] = "Orange"
console.log(fruits.length)
//fruits.forEach((item, index) => {
//    console.log(`${item}: ${index}`)
//})

//const iterator = fruits.keys();
//for (const key of iterator) {
//    console.log(`${key}: ${fruits[key]}`)
//}

console.log(fruits)
 let fr = fruits.copyWithin(0, 1, 2); // mutates arr
console.log( 'After copy ',fr)
const arr2 = fruits.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...fruits].copyWithin(0, 1, 2); // does not mutate arr


console.log(arr2)
console.log(arr3)

function method(callbackFn, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (i in this) {
        const result = callbackFn.call(thisArg, this[i], i, this);
        // Do something with result; maybe return early
      }
    }
    return length;
  }
  method(1, 2, 3, 4)
console.log(  method.length)

Array.prototype.method = method;
console.log(fruits.method((item, index) => {
    console.log(` Array fn :${item}: ${index}`)
}))


const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); 

function f() {
    console.log(Array.prototype.join.call(arguments, "+"));
  }
  
  f("a", "b");

  
const fruitsString = fruits.join(",m ");
console.log(fruitsString);

console.log(fruits.indexOf("Orange"));

fruits.includes("Orange");

