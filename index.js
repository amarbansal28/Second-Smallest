function secondSmallest(arr){
    arr = [...new Set(arr)];
    arr = arr.sort(function(a,b){return a-b});
    return arr[arr.length-2];
}

console.log(secondSmallest([4,5,9,1,2,4,0,3,5,7,1]))
