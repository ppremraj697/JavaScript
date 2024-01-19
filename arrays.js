// JS arrays are resizable and can contain a mix of different data types
// JS arrays are not associative arrays(Not key:value pair)
// JS arrays are zero-indexed
// JS array-copy operations create shallow copies(point to the same underlying values)
// Internally, JS arrays are stored as Objects

var arr = ["Premraj", 20166, "DYPIEMR", 1, 2, "Pune"];

arr.pop();//Delete last element : Returns Deleted element
arr.push(5);//Insert in last : Returns new array length
arr.unshift();//Remove first element : : Returns Deleted element
arr.shift("Good Boy");//Insert in begineeing : Returns new array length

console.log(arr);

// arr[-1] = "Premraj";//Negative Indexed Array in JS : Not Suggested

//ARRAY METHODS & PROPERTIES

console.log(arr.length);
console.log(arr.at(-2));//Accessing 2nd last element
console.log(arr[1]);

console.log(arr.toString());//Converts an array to a string of comma separated array values.
console.log(arr.join(" * "));//Joins all array elements into a string with mentioned seperator.

// Using delete() leaves undefined holes in the array. SYNTAX : delete arr[0]
// Use pop() or shift() instead.