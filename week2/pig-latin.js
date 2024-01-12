/* Author: Mike Ma
1/11/24 */

let inputText = prompt("Please enter a word in English:");
let firstChar = inputText.slice(0, 1);
let secondChar = inputText.slice(1, 2);
let firstTwoChar = inputText.slice(0, 2);
firstChar = firstChar.toLowerCase();
secondChar = secondChar.toLowerCase();
firstTwoChar = firstTwoChar.toLowerCase();
let translatedText;

if (inputText.length < 2) {
    alert("Error! Your input is too short!");
} else if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u") {
    translatedText = inputText + "way";
    document.write(translatedText);
} else if (secondChar == "a" || secondChar == "e" || secondChar == "i" || secondChar == "o" || secondChar == "u") {
    translatedText = inputText.slice(1) + firstChar + "ay";
    document.write(translatedText);
} else {
    translatedText = inputText.slice(2) + firstTwoChar + "ay";
    document.write(translatedText);
}


//document.write(secondChar);