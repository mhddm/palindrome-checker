const textArea = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function isPalindrome(str) {
  if (str.length === 0) {
    alert("Please input a value.");
    return null;
  }

  // lowercase the input
  const stringLowerCased = str.toLowerCase();

  // strip out non-alphanumerical characters (replace, match regex)
  const regex = /[a-z0-9]/g;
  const filteredArray = stringLowerCased.match(regex);
  const reversedFilteredArray = [...filteredArray].reverse();
    
  // return string === reversedString, either true or false
  const combinedString = filteredArray.join("");
  const reversedString = reversedFilteredArray.join("");
    
  return combinedString === reversedString;
  }

function getStringFromInput() {
  // take input text from user
  const textInput = textArea.value;

  // stop execution of input is empty
  if (isPalindrome(textInput) === null) {
    resultText.innerHTML = "";
    return;
  }

  // display the result of the test
  if (isPalindrome(textInput)) {
    resultText.innerHTML = `
    <p>${textInput} is a palindrome.</p>
    `;
    resultText.style.display = "block";
  } else {
    resultText.innerHTML = `
    <p>${textInput} is not a palindrome.</p>
    `;
    resultText.style.display = "block";
  }
}

// add event listener for button click
checkButton.addEventListener("click", getStringFromInput);

textArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getStringFromInput();
  };
});


