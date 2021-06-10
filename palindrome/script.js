function checkPalindrome(str) {
    console.log(str);

    for(i=0;i<str.length;i++){
        var temp=str[i];

        var reverseTemp = temp.split("").reverse().join("");

        if(temp == reverseTemp) {
        console.log(temp);
        }
        
    }
}

checkPalindrome(['joy','did','redivider', 'deified', 'civic', 'radar','guvi','project','101','222','8954']);