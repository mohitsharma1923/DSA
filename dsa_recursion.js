// Recursion for fibonacci ...

// function fibonacciRecursion(n){
//     if(n<0){
//         return false
//     }else if(n<2){
//         return  n
//     }
//     return fibonacciRecursion(n-1)+fibonacciRecursion(n-2)
// }
// console.log(fibonacciRecursion(6))

// Big-O=O(n^2)

// Recursion for factorial...

function factorialRecursion(n){
    if(n===0){
        return 1
    }
    return n*factorialRecursion(n-1)
}
console.log(factorialRecursion(5))
console.log(factorialRecursion(0))

// Big-O= O(n)