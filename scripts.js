// Business Logic
function wordpuzzle(text) {
  //console.log(text)
  let textSplit = Array.from(text);
  //console.log(textSplit)
  for (i = 0; i <= textSplit.length - 1; i++) {
    //console.log("This for loop is being called");
    if (textSplit[i].toLowerCase() === "a" || textSplit[i].toLowerCase() === "e" || textSplit[i].toLowerCase() === "i" || textSplit[i].toLowerCase() === "o" || textSplit[i].toLowerCase() === "u") {
      textSplit[i] = "-";
    };
  };
  let completeSentance = textSplit.join('');
  return completeSentance
};

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value.replace(/\r\n/g, '\n');
  
  // wordPuzzle(passage);
  const finishedPuzzle = wordpuzzle(passage);
  document.getElementById("user-string").innerText = passage;
  document.getElementById("user-string-without-vowels").innerText = finishedPuzzle; 
};

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});