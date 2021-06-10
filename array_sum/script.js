function arr_sum(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        var sum=arr[i]+sum;
    }
    console.log(sum);
}
var arr=[2,5,54,62,12,72];
arr_sum(arr);

function arr_sum1(array){
    var sum = array.reduce(function(a, b){
    return a + b;
    }, 0);
    
    console.log(sum);
}
var array = [1, 2, 3, 4, 5];
arr_sum1(array);


