// Using for loop method
function odd_num(){
    var arr=[25,52,31,2,19,45];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            console.log(arr[i]);
        }
    }
}
odd_num();
// ---------------------------------------------

var a=" ";
console.log(a);

// Using .forEach() Method
function odd_num2(num){
    if(num%2==1){
        console.log(num);
    }

}
var arr=[24,88,89,3,61,48,57,99];
arr.forEach(odd_num2);
// ---------------------------------------------

var a=" ";
console.log(a);

// Using .filter() Method
function odd_num3(){
    var arr=[11,22,33,44,55,66,77,88,99];
    var odds=arr.filter(number=> number%2 == 1);
    console.log(odds);
}
odd_num3();
// -----------------------------------------------