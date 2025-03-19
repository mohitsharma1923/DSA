// Factorial of number...

function factorial(n) {
    if (n < 0) {
        return("Please enter positive integer")
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = result * i
        }
        return result
    }
}

console.log(factorial(5))
console.log(factorial(-1))

// Big-O =O(n)