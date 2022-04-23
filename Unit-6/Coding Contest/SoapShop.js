const checkSoaps =(n,arr,m)=>{

    //console.log(n,arr,m);
    let l = 0, r = n;
    let mid
    while (l < r) {
         mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === m) {
            while ((mid - 1) >0  &&
                arr[mid - 1] <m)
                mid--;
            break;
        }
        else if (arr[mid] > m)
            r = mid;
        else
            l = mid + 1;
    }
    while (mid > -1 && arr[mid] > m)
        mid--;
    return mid + 1;
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let n = +input[0].trim();
let arr = input[1].trim().split(" ").map(Number);
arr.sort(function(a,b){
    return a-b
})
let q = +input[2].trim();
let l=3;
for(let i=0;i<q;i++)
{
    let m = +input[l++].trim()
    console.log(checkSoaps(n,arr,m))
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
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