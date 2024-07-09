//Simulating delay of 10 seconds to the setTimeout()'s callback which is expected to execute after 5 seconds.

console.log("Start");

setTimeout(() => {
  console.log("Callback invoked");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("While expired");
