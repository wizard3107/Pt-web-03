function cipher(n, arr) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (stack.length === 0) {
            stack.push(arr[i])
            count = 1;
        }
        else if (arr[i] === stack[stack.length - 1]) {
            count++;
        }
        else {
            stack.push(count);
            count = 0;
            stack.push(arr[i]);
            count = 1;
        }
    }
    stack.push(count);
    console.log(stack.join(""));
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let t = +input[0].trim();
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[l++].trim();
        let arr = input[l++].trim().split("");
        cipher(n, arr);
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
5
aabcc
5
aazaa`);
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