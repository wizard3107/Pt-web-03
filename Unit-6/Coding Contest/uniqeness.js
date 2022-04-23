const uniqueness=(str)=>{
    let map = new Map();

    for(let i = 0;i<str.length;i++)
    {
        if(map.has(str[i]))
        return "No"
        else
        map.set(str[i],1)
    }
    return "Yes"


}

function runProgram(input) {
  // Write code here
input=input.trim()
console.log(uniqueness(input))
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`masi`);
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