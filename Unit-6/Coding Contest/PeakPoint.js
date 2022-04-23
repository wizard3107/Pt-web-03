const peak = (n, arr) => {

    let Top = 0;
    for(let i=0;i<n;i++)
    {
        if(arr[i]<arr[i-1])
        {
            return i-1;
        }
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let t = input[0].trim()
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[l++].trim();
        let arr = input[l++].trim().split(" ").map(Number);
        console.log(peak(n, arr))
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
3
10 20 11
5
1 3 6 5 4`);
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