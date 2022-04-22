function split(wholeArray) {
    let firstHalf = wholeArray.slice(0,wholeArray.length/2)
    let secondHalf = wholeArray.slice(wholeArray.length/2)
    return [firstHalf, secondHalf];
  }
  
  function merge(array1,array2){
    return array1.concat(array2)
  }
  
  function mergeSort(array, arr = []) {
    arr = split(array, arr);
    if(arr.length == array.length) return arr;
    
    // if(arr.length == 0){
    //     arr = arr.concat(split(array));
    //     return mergeSort(array, arr);
    // } 
    for (let i = 0; i < arr.length; i++) {
        
        // arr[i] = split(arr[i]).splice(i);
        
        console.log(arr)
        arr[i] = mergeSort(arr[i], arr);
    }
    console.log("sali del for")
    return mergeSort(array, arr)
    
    /*
        1. dividir el array en dos.
        2.
    */
    
    
    // return mergeSort(array, arr);


    // if(!(arr.length === array.length)){
    //     if(arr.length === 0){
    //         arr = split(array)
    //         return mergeSort(array,arr)
    //     }
    //     for(i=0;i<arr.length;i++){
    //         let temp = arr[i];
    //         arr[i] = split(temp);
    //     }
  
    //     console.log(arr)
    //     return mergeSort(array, arr)
    // }

    // return arr;
    
  }