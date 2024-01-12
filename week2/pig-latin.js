/* Author: Mike Ma
1/11/24 */

let inputText = prompt("Please enter a word in English:");
let firstChar = inputText.slice(0, 1); //saving parts of input that we want to test to variables.
let secondChar = inputText.slice(1, 2);
let firstTwoChar = inputText.slice(0, 2);
firstChar = firstChar.toLowerCase(); //using .toLowerCase() in order to make the code case agnostic.
secondChar = secondChar.toLowerCase();
firstTwoChar = firstTwoChar.toLowerCase();
let translatedText; //declaring blank variable where translated pig latin will be stored and printed from.

if (inputText.length < 2) { //tests if user input is a single letter or a blank, produces error if true.
    alert("Error! Your input is too short!");
} else if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u") { //tests if first character of user input is a vowel, appends "way" if true.
    translatedText = inputText + "way";
    document.write(translatedText);
} else if (secondChar == "a" || secondChar == "e" || secondChar == "i" || secondChar == "o" || secondChar == "u") { //tests if second character of user input is a vowel (if test above fails we know first char is a consonant), appends that consonant + "ay" if true.
    translatedText = inputText.slice(1) + firstChar + "ay";
    document.write(translatedText);
} else { //if both tests above fail, that means first two letters are consonants, appends those consonants + "ay".
    translatedText = inputText.slice(2) + firstTwoChar + "ay";
    document.write(translatedText);
}