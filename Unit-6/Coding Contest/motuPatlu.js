function runProgram(input) {
  // Write code here
input= +input.trim()
let steps = Math.floor(input/5);
console.log(steps+1);
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`265557`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}