function Decipher(n, arr) {
    let ans = [];
    for (let i = 0; i < n; i = i + 2) {
        let chr = arr[i]
        let num = +arr[i + 1];
        let j = 0;
        while (j < num) {
            ans.push(chr);
            j++;
        }
    }
    console.log(ans.join(""));
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let t = +input[0].trim();
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[l++].trim();
        let arr = input[l++].trim().split("");
        Decipher(n, arr);
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
6
a2b1c2
6
a2z1a2`);
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