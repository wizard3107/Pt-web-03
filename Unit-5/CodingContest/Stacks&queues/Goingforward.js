function  passed(n,k,arr)
{
    let temp= arr[k];
    let count = 0
    for(let i=0;i<n;i++)
    {
        if(arr[i]>=temp)
        count++
    }
    console.log(count);
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let [n,k]=input[0].trim().split(" ").map(Number);
let arr = input[1].trim().split(" ").map(Number);
passed(n,k,arr)
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`8 5
10 9 8 7 7 7 5 5`);
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