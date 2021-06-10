function removeDuplicate(fruits){
    let uniqueChars = [...new Set(fruits)];
    console.log(uniqueChars);
}
var arr=['apple', 'banana', 'mango', 'apple', 'pineapple', 'mango'];

removeDuplicate(arr);