// 1.Divide all the words in the sentence individually. This task can be achieved by using string.split() method.
// 2.Convert all the elements in each and every word in to lowercase using string.toLowerCase() method. 
// 3.Loop through first elements of all the words using for loop and convert them in to uppercase. After converting, concatenate them with the remaining elements of their respective word, leading to a original word with first element in upper case. 
// 4.Join all the words using String.join() with a space between them so as to convert it in to its original string but title cased.

function title_cap(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
}
title_cap("GUVI, tech DesErves YoU");