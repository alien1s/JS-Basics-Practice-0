// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); // p a { color: red; }
anchorElement.href = "https://academind.com";

// When it comes to querying / selecting HTML elements via JavaScript, there are a couple of commonly used built-in methods that are worth knowing:

// document.getElementById('some-id'): Select a HTML element by its ID (selects only one element, since IDs should be unique)

// document.querySelector('<some-css-selector>'): Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector (e.g. ID selector, tag type selector, class selector, combined selectors etc.)

// document.querySelectorAll('<some-css-selector>'): Selects ALL matching HTML elements that are met / selected by the provided CSS selector

// There also are a few lesser used selection methods, that you also should've heard about:

// document.getElementsByClassName('some-css-class'): Selects all HTML elements that have the provided CSS class

// document.getElementsByTagName('tag'): Selects all HTML elements that are of the provided HTML tag type

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElenment = document.createElement("a");
console.dir(newAnchorElenment);
newAnchorElenment.href = "https://google.com";
newAnchorElenment.textContent = "This is a new link";

// 2. Get access to the parent element that should hold the new element
let fristParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

fristParagraph.append(newAnchorElenment);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let secondParagraph = document.querySelector(".main-p");

// 2. Remove it!

secondParagraph.remove();

// MOVE ELEMENTS

let H1Element = document.querySelector("h1");

H1Element.parentElement.append(H1Element);

// inner HTML

let anotherParagraph = document.createElement("p");
anotherParagraph.innerHTML =
  "Hi this is <strong>Important!</strong> " + "It's very <span>important</span>";
document.body.append(anotherParagraph);
