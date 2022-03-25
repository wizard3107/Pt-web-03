function minmax(n,arr){
    let min=-1,max=-1;
   
} 
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0].trim();
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n=+input[l++].trim();
        let arr = input[l++].trim().split(" ").map(Number);
        minmax(n,arr)
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
2
3 1
7
5 3 1 2 5 1 2
9
1 3 2 2 3 2 2 2 7
`);
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