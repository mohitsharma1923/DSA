function countDigit(n) {
    let count = 0
    while (n > 0) {
        count = count + 1
        n = Math.floor(n / 10)
    }
    // return count
}
console.log(countDigit(5678))

// Reverse number ............

function reverse(n) {
    let rev = 0
    while (n > 0) {
        rev = (rev * 10) + n % 10
        n = Math.floor(n / 10)
    }
    // return rev
}
console.log(reverse(546))

// check the given number is palindrome or not ...........


// function isPlandrome(n){
//     let num=n
//     let rev=0;
//     while (n>0){
//         rev=(rev*10) + n%10;
//         n=Math.floor(n/10);

//     }
//     if (num===rev){
//         console.log("Given number is Pallendrome")
//     }else{
//         console.log("not a pallindrome number")
//     }
// }
// isPlandrome(121)

//  check the given number is armstrong or not ..............

// function isArstrong(n){
//     let num= n
//     let sum=0
//     while (n>0){
//         let lastDigit=n%10;
//         sum=sum + (lastDigit**3);
//         n=Math.floor(n/10);
//     }
//     if (num===sum){
//         console.log("Armstrong number")
//     }else{
//         console.log("not a armstrong number")
//     }
// }
// isArstrong(678)


// frequency of digit.......................

const arr = [4, 5, 4, 4, 5, 6, 7, 888]

let freqMap = {}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] in freqMap) {
        freqMap[arr[i]] += 1
    }
    else {
        freqMap[arr[i]] = 1
    }

}
//  console.log(freqMap)

// Reverse of array ...............

// const arr1=[3,4,5,6]
// const revArr=[];
// let n=arr1.length-1
// for (let i = n; i >=0 ; i--) {
//     let lastItem=arr1[i]
//     revArr.push(lastItem)

// }
// console.log(revArr)



//  Another method ..................................


// let arr2=[3,4,6,7,8,9,44];
// function revArra(arr2, left, right) {
//     if (left >= right) {
//         return arr2
//     }
//    [ arr2[left], arr2[right]] = [arr2[right], arr2[left]]
//     return revArra(arr2, left + 1, right - 1)
// }
// console.log(revArra(arr2, 0, arr2.length-1))


//  Reverse of String ........................................



// const name="mohit";
// let revName="";
// let n=name.length-1
// for (let i = n; i >=0; i--) {
//     revName=revName+name[i]
    
// }
// console.log(revName)



