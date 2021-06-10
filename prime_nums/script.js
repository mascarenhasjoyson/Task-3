function isPrime(arr){
    var primeArr=[];
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                count=count+1;
            }
        }
        if(count==0 && arr[i]>=2){
            primeArr.push(arr[i]);
        }
    }
    console.log(primeArr);
}

var arr=[1,13,24,31,35,37,121,89,73, 11];
isPrime(arr);