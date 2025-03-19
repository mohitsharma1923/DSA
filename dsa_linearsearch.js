function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }
        
    }
    return -1
}

console.log(linearSearch([2,5,8,0,6],0));

// Big-O = O(n)
