// this script is a demonstration of how to load an external JS file.
// This file, when imported, will create and insert a simple box that shows a successful import.

let b = document.body;
let appended = document.createElement("div");
appended.style.padding = "2em";
appended.style.border = ".5em solid blue";
appended.style.backgroundColor = "turquoise";
appended.style.fontWeight = "700";
appended.innerText = "Appended from JS at the TOP of the document."; // IMPORTANT: THIS WILL NOT WORK. This is an example of how the document is loaded.
b.appendChild(appended);
