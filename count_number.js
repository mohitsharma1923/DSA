function countDigit(n) {
    let count = 0
    while (n > 0) {
        count = count + 1
        n = Math.floor(n / 10)
    }
    return count
}
console.log(countDigit(5678))

// Reverse number ............

function reverse(n){
    let rev=0
    while(n>0){
        rev=(rev*10)+n%10
        n=Math.floor(n/10)
    }
    return rev
}
console.log(reverse(546))

