/* Author: Mike Ma
1/11/24 */

let inputText = prompt("Please enter text");
let firstChar = inputText.slice(0, 1);
let firstTwoChar = inputText.slice(0, 2);
firstChar = firstChar.toLowerCase();
firstTwoChar = firstTwoChar.toLowerCase();
let translatedText;

if (inputText.length < 2) {
    alert("Error! Your input is too short!");
} else if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u") {
    translatedText = inputText + "way";
    document.write(translatedText);
}


//document.write(firstTwoChar);