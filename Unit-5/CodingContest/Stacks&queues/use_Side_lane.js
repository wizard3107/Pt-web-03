function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let l = 0;
    for (let j = 0; j < input.length - 1; j = j + 2) {
        let n = +input[l].trim();
        l++;
        let arr = input[l].trim().split(" ").map(Number);
        l++;
        let side = [];
        let main = [];

        //console.log(arr,n);
        let flag = true
        for (let i = 0; i < n; i++) {
           
            if (arr[i] > arr[i + 1]) {
                    
            }
        }
        if (flag)
            console.log("yes");
        else
            console.log("no")

    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5 
4 1 5 3 2 
5 
3 1 2 5 4 
5 
5 3 2 1 4 
10 
1 2 10 5 4 3 7 6 8 9 
10 
1 2 10 5 4 3 9 8 7 6 
5 
3 5 2 4 1 
5 
1 2 4 3 5 
4 
4 2 3 1 
0`);
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