function check(arr, n) {
    let stack=[]
    let flag=true
    for (let i = 0; i < n; i++) {
        if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            stack.push(arr[i]);
        }
        else {
            if (stack[stack.length - 1] === "[" && arr[i] === "]" || stack[stack.length - 1] === "(" && arr[i] === ")" || stack[stack.length - 1] === "{" && arr[i] === "}") {
                stack=stack.slice(0,stack.length-1);
            }
            else {
                flag = false;
                break;
            }
        }
    }
    if(flag && stack.length===0)
    {
        console.log("balanced")
    }
    else
    console.log("not balanced")
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let n = input[0].trim()
    for (let i = 1; i <= n; i++) {
        let arr = input[i].trim().split("");
        check(arr, arr.length);
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
{([])}
()
([]
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