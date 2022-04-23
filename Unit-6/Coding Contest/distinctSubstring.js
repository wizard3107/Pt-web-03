const distinctSubstr = (n, str) => {

    let count = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = i; j < n; j++) {
            temp +=str[j] 
            if (map.has(temp))
                map.set(temp,map.get(temp)+1)
            else
            {
                map.set(temp,1)
                count++    
            }
        }
    }
    return count;

}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let t = +input[0].trim();
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[l++].trim()
        let str = input[l++].trim();
        console.log(distinctSubstr(n, str));
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
90
munjpefntsdujvvygtpwovxexakobefnyuwrydfvviqhgognixkytkdunplotrcvmcnofskdddlmrtccsobobgloxx
3
aaa`);
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