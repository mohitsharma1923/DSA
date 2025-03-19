// Question- Find the second largest number
// Given an array arr of size n ,print second largest
//distict element from an array

// input :[12,34,56,6] --------->>>>>>>>output:34
// input :[3,6,6] --------->>>>>>>>output:3

function secondLargestNumber(arr){
    let uniqueArr=Array.from(new Set(arr))
    uniqueArr.sort((a,b)=>{
        return b-a;

    })
    if(uniqueArr.length>=2){
        return uniqueArr[1]
    }else{
        return -1
    }
}
// console.log(secondLargestNumber([1,4,55,6,6]));



