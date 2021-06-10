function secondSmallest(arr){
    arr = [...new Set(arr)];
    arr = arr.sort(function(a,b){return a-b});
    return arr[1];
}

console.log(secondSmallest([4,5,9,1,2,4,0,3,5,7,1]))


function secondSmallest_2(arr){
    let obj={};
    for(let a in arr){
        obj[a]={};
    }
    arr = Object.keys(obj);
    let first = Number.MAX_VALUE;
    let second  = Number.MAX_VALUE;
    for(let i =0; i< arr.length; i++){
        if(first < arr[i]){
            second = first;
            first = arr[i];
        }else if(second < arr[i] && first != second){
            second = arr[i];
        }
    }
    return second;
}

console.log(secondSmallest_2([4,5,9,1,2,4,0,3,5,7,1]))
