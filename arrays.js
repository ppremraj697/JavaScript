// JS arrays are resizable and can contain a mix of different data types
// JS arrays are not associative arrays(Not key:value pair)
// JS arrays are zero-indexed
// JS array-copy operations create shallow copies(point to the same underlying values)
// Internally, JS arrays are stored as Objects

//MODERN JS ARRAY METHODS

const arr1 = [10, 25, 3, 14, 55, 36, 77, 38]

//forEach
arr1.forEach(function (val, index) {
    console.log(val + index)
})

//map in js
const mappedArray = arr1.map((value, index) => {
    return value * index;
})
console.log(mappedArray)

//filter
const filteredArray = arr1.filter((val) => {
    //filters even elements from array
    return !(val % 2);
})
console.log(filteredArray)

//reduce
const reducedArrayResult = arr1.reduce((accumulator, currentElement, currentIndex, array) => {
    console.log(accumulator, currentElement, currentIndex, array);
    return accumulator + currentElement;
}, 0)
console.log(reducedArrayResult);
// const emptyArr = []
// const result = emptyArr.reduce((acc, curr)=>{
//     return acc+curr;
// })
// console.log(result);--------- TYPE ERROR without initial value

//ARRAY METHODS & PROPERTIES
var arr = ["Patil", "Premraj", 20166, "DYPIEMR", 1, 2, "Pune"];

arr.pop();//Delete last element : Returns Deleted element
arr.push(5);//Insert in last : Returns new array length
arr.unshift();//Remove first element : : Returns Deleted element
arr.shift("Good Boy");//Insert in begineeing : Returns new array length

// arr[-1] = "Premraj";//Negative Indexed Array in JS : Not Suggested

console.log(arr.length);
console.log(arr.at(-2));//Accessing 2nd last element
console.log(arr[1]);
console.log(arr.toString());//Converts an array to a string of comma separated array values.
console.log(arr.join(" * "));//Joins all array elements into a string with mentioned seperator.

// Using delete() leaves undefined holes in the array. SYNTAX : delete arr[0]
// Use pop() or shift() instead.
