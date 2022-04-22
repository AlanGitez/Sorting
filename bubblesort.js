
function bubbleSort(arr, ac = 0){
    if(ac == arr.length -1) return arr;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] < arr[i]){
            swap(arr, i);
        }
    }
    ac++;
    
    return bubbleSort(arr, ac, com);
}

function swap(arr, index){
    // let swaped = 0;
    let elder = arr[index];
    arr.splice(index, 1, arr[index+1]);
    arr[index+1] = elder;

    // swaped++;
    //console.log("swaps: "+swaped)
    return arr;
}
