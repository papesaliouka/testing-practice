const arrayAnalysis = (arr)=>{
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    let average = Math.floor(sum/arr.length)
    return(
        {
            average,
            min : Math.min(...arr),
            max : Math.max(...arr),
            length: arr.length
        }
    );
}

export default arrayAnalysis