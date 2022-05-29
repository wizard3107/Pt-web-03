let map = new Map();
let ans = [];

const checkAnagram = (str, map) => {
    if (map.has(str.sort().join(""))) {
        return true ;
    }
    else {
        return  false
       
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim();
    for (let i = 1; i <= n; i++) {
        var string = input[i].trim().split("");
        let str = input[i].trim().split("");
       
        if(!checkAnagram(string, map)){
            ans.push(str.join(""));
            map.set(string.sort().join(""), 1);
        }
    }
    console.log(ans.length)
    console.log(ans.sort().join("\n"));
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
eodc
odec
code
baca
aabc`);
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