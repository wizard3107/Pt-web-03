const upperBond =(arr,n,k)=>{
    let l=0,h=n-1;
    let ans=-1
    while(l<=h)
    {
        let mid = l + Math.floor((h - l) / 2);
        if (arr[mid] >= k) {
            ans=mid;
            h=mid-1;
        }
        else if (arr[mid] < k) {
            l = mid + 1
        };
    }
    if(ans===-1)
    return 0;
    else
    return n-ans
}

const solution =(arr,n,k)=>{
    let l = 0, h = n - 1;
    let ans = -1
    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2);
        if (arr[mid] > k) {
            ans = mid;
            h = mid - 1;
        }
        else {
            l = mid + 1
        };
    }
    if (ans === -1)
        return 0;
    else
        return n - ans
}
const BS =(c,k,arr,n)=>{

    if(c===0)
    {
        return upperBond(arr,n,k)
    }
    else{
        return solution(arr,n,k);
    }

}

function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let n = +input[0].trim();
let arr =  input[1].trim().split(" ").map(Number);
arr.sort(function (a,b){
    return a-b;
})
let q = +input[2].trim()
let l = 3;
for(let i=0;i<q;i++)
{
    let [c,k]=input[l++].trim().split(" ").map(Number);
   // console.log(c,k)
    console.log(BS(c,k,arr,n));
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
1 2 3 4 5
3
0 6
1 4
0 1`);
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