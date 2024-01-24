// Sum All Numbers in a Range : We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumAll(arr) {
    let sum = 0;
    if (arr[0] < arr[1]) {
        let temp = arr[0]
        while (temp <= arr[1]) {
            sum += temp;
            temp++;
        }
    }
    else {
        let temp = arr[1]
        while (temp <= arr[0]) {
            sum += temp;
            temp++;
        }
    }
    return sum;
}
console.log(sumAll([10, 5]));