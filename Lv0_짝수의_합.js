// 풀이

function solution(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        i % 2 === 0 ? sum += i : sum += 0
    }
    return sum
}

// 좋은 풀이 1.

function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

// 2
function solution(n) {
    return Math.floor(n / 2) * (2 + n) / 2 | 0
}