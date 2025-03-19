// Array in javaScript

// Array declaration

let arr=[12,3,4,"Mohit",true]
// console.log(arr)
// console.log(arr[0])
// console.log(arr.length)
arr.push("manvi");
// console.log(arr);
arr.pop()
// console.log(arr);
arr.unshift("mata")
// console.log(arr);
arr.shift()
// console.log(arr);

let boj={
    name:"Mohit",
    age:20
}

let arr2=[23,4,"mohit",true,boj]
// console.log(arr2);
// console.log(arr2[4].age);

//loop in Array

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    // console.log(element)
    
}

i=0
while(i<arr2.length){
    // console.log(arr2[i]);
    i++;
}

const numbers=[1,2,3,45,67,60];
const newNumber= numbers.map((item,index,array)=>{
    return item+5
})
// console.log(newNumber)
const filternum=numbers.filter((item)=>{
   return item>3
})
// console.log(filternum)
const reduceNumber=numbers.reduce((prev,item)=>{
    return prev+item
},0)
// console.log(reduceNumber);
const someNum=numbers.some((item)=>{
    return item>3 // return true or false
 })
// console.log(someNum);
const everyNum=numbers.every((item)=>{
    return item>3 // return true or false
 })
//  console.log(everyNum);

const findNum=numbers.find((item)=>{
    return item>3 
 })
//  console.log(findNum);

// Spread and rest operetors....

const nums=[1,2,3,4];
const nums2=[45,67,88];

const finalnums=[...nums,...nums2];   //Spread operetor
// console.log(finalnums);

function sum(...num){    //rest operetor  
    return num
}
result=sum(nums,nums2,"ram")
// console.log(result);

//Concate...

const newArray=nums.concat(nums2)
// console.log(newArray);

// Slice...

const sliceNumber=nums.slice(0,3)
// console.log(sliceNumber);

// Splice
nums.splice(0,2,"orange")
// console.log(nums);

// fill...

nums.fill(4,2);
// console.log(nums)

// Flat...
const flatEx=[1,2,3,[5,6,7],[4,[6,8]]];
const falttendArray=flatEx.flat(); 
// console.log(falttendArray);
const falttendArrayTwoLevel=flatEx.flat(2); 
// console.log(falttendArrayTwoLevel)

// Reverse...
const data=[3,5,4,8];
// data.reverse();
// console.log(data)

//sort...
data.sort((a,b)=>a-b)
// console.log(data)