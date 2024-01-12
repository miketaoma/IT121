/* Author: Mike Ma
1/11/24 */

let inputText = prompt("Please enter a word or phrase in English. Phrase format should be:\nword1 word2 word3");
let inputTextArray = inputText.split(" "); //splitting input on the space

for (let i = 0; i < inputTextArray.length; i++) { //for loop iterates the if statements below through each element of array.
    
    let firstChar = inputTextArray[i].slice(0, 1); //saving parts of input that we want to test to variables.
    let secondChar = inputTextArray[i].slice(1, 2);
    firstChar = firstChar.toLowerCase(); //using .toLowerCase() in order to make the code case agnostic.
    secondChar = secondChar.toLowerCase();
    let translatedText; //declaring blank variable where translated pig latin will be stored and printed from.

    if (inputTextArray[i].length < 2) { //tests if user input is a single letter or a blank, produces error if true.
        alert("Error! Your input is too short!");
    } else if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u") { //tests if first character of user input is a vowel, appends "way" if true.
        translatedText = inputTextArray[i] + "way";
        document.write(translatedText);
    } else if (secondChar == "a" || secondChar == "e" || secondChar == "i" || secondChar == "o" || secondChar == "u" || secondChar == "y") { //tests if second character of user input is a vowel (if test above fails we know first char is a consonant), appends that consonant + "ay" if true. Including "y" bec of edgecase words like "by" or "mystery"
        translatedText = inputTextArray[i].slice(1) + firstChar + "ay";
        document.write(translatedText);
    } else { //if both tests above fail, that means first two letters are consonants, appends those consonants + "ay".
        translatedText = inputTextArray[i].slice(2) + firstChar + secondChar + "ay";
        document.write(translatedText);
    }

    document.write(" "); //places space between each pig latin translation
}
