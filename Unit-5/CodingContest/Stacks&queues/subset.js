function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let subset = new Map();
    uu
    for (let i = 0; i < n; i++) {
        let sub = []
        for (let j = i; j < n; j++) {
            sub.push(arr[j]);
            sub.sort(function (a, b) {
                return a - b;
            })
            if (!subset.has(sub.join(" "))) {
                subset.set(sub.join(" "))
            }
        }

    }
    const iterator1 = subset[Symbol.iterator]();
    for (const item of iterator1) {
        console.log(item[0]);
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
1 2 2`);
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