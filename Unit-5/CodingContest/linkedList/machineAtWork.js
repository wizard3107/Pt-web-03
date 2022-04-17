
const min_days = (l, h,n,arr,p) => {
    let res = 0
    while (l <= h) {
        let m = l + Math.floor((h - l) / 2)
        let s = 0
        for (let i = 0; i < n; i++) {
            s = s + Math.floor(m / arr[i])
        }
        if (s >= p) {
            res = m
            h = m - 1
        }
        else {
            l = m + 1
        }
    }
    return res
}
function runProgram(input) {
    input = input.trim().split("\n")
    let [n, p] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    arr.sort(function (a, b) {
        return a - b
    })
    let maximum = arr[0] * p

    console.log(min_days(0, maximum,n,arr,p))

}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2 5
2 3`);
} else {
    process.stdin.rese();
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
    process.on("SIgInT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}