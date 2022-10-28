function firstAndLastKNumbers (inputArray){

    let workArray = inputArray.slice(1,inputArray[inputArray.length-1]);
    let k = inputArray[0];
    
    let firstElementsResult = workArray.slice(0,k);
    let lastElementsResult = workArray.slice(-k);
    
    console.log(firstElementsResult.join(' '));
    console.log(lastElementsResult.join(' '));

}
firstAndLastKNumbers([0, 
    6,7,8,9]
    );