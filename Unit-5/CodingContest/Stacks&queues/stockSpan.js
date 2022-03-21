
var arr = [10, 4, 5, 90, 120, 80];
var n = arr.length;
let res = Array(n).fill(0);
let ans = [];
ans.push(0);
res[0] = 1;
for (let i = 1; i < n; i++) {
    while (ans.length !== 0 && arr[ans[0]] <= arr[i])
        ans.pop();
    res[i] = (ans.length === 0) ? (i + 1) : (i - ans[0]);
    ans.push(i);
}
