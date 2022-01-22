/* We don't need to import sample1 because all the calculations it performed have persisted. 
 * If you reference b, it will be null, but it will be defined!
 * If you reference appended, it will give you the element created earlier. (We can use this to our advantage here)
 */

appended.innerText = "Appended from JS at the BOTTOM of the document."; 

b = document.body; // we need to tell the variable to "re-retrieve" the body, since the last time it tried the body was null
b.appendChild(appended); // and now we can append our element.
