function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);

    let maximum = 0
    let dp = []
    for (let i = 0; i < n; i++) {
        dp.push(1)
    }
    for(let i=1;i<n;i++)
    {
        for(let j=i-1;j>=0;j--){
            if(arr[j]<arr[i])
            {
                dp[i]=Math.max(dp[i],1+dp[j])
            }
        }
    }
    // console.log(dp)
    for(let i=0;i<n;i++)
    {
        if(dp[i]>maximum)
        {
            maximum=dp[i];
        }
    }
    console.log(maximum);
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`9
10 22 9 33 21 50 41 60 80`);
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