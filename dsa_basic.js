// check squre of 2

function squreofTwo (n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}
console.log(squreofTwo(16))

// Big-O =O(logn)
