/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nconst container = document.querySelector(\".container\");\nconst card = document.querySelector(\".card\");\n\n//modal selectors\nconst openModal = document.querySelector(\".open-modal\");\nconst modalContainer = document.querySelector(\".modal-container\");\nconst closeModal = document.querySelector(\".close-modal\");\nconst deleteBook = document.querySelector*(\".delete-book\");\n\n//get input values + add book on submission\ndocument.getElementById(\"form\").onsubmit = function() {\nconst formTitle = document.getElementById(\"title\").value;\nconst formAuthor = document.getElementById(\"author\").value;\nconst formPages = document.getElementById(\"pages\").value;\nconst formReadStatus = document.getElementById(\"readStatus\").value;\n\n  modalContainer.classList.remove('show');\n  addBook(formTitle, formAuthor, formPages, formReadStatus);\n  container.innerHTML = \"\";\n  appendBooks();\n  console.log(myLibrary);\n  return false;\n}\n\n// modal \nopenModal.addEventListener(\"click\", () => modalContainer.classList.add('show'));\ncloseModal.addEventListener(\"click\", () => modalContainer.classList.remove('show'));\nmodalContainer.addEventListener(\"click\", (e) => {\n  if (e.target === modalContainer) modalContainer.classList.remove('show');\n});\n\n//delete card on click + toggle readStatus\ncontainer.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"delete-book\")) {\n    const cardIndex = e.target.parentNode.dataset.index;\n    myLibrary.splice(cardIndex, 1);\n    e.target.parentNode.remove();\n  };\n\n  if (e.target.matches(\"input\")) {\n    const cardIndex = e.target.parentNode.parentNode.dataset.index;\n    if (e.target.checked) {\n      e.target.parentNode.parentNode.classList.toggle(\"checked\");\n      myLibrary[cardIndex].read = \"checked\";\n    } else { \n      myLibrary[cardIndex].read = \"\";\n      e.target.parentNode.parentNode.classList.toggle(\"checked\");\n    };\n  };\n})\n\n//toggle read status on click\n\n\n//main logic\nlet myLibrary = [];\n\nclass Book {\n  constructor(title, author, pages, read) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.read = read;\n  }\n\n  info() { \n    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`\n  }\n}\n\nlet book1 = new Book (\"Idk\", \"Danny\", 355, \"read\")\n\n\nfunction addBook(title, author, pages, read) {\n  const book = new Book(title, author, pages, read);\n  myLibrary.push(book);\n}\n\n\nfunction appendBooks() {\n  myLibrary.forEach(book => { \n    \n    let html = `\n    <div class=\"card ${book.read}\" data-index=\"${myLibrary.indexOf(book)}\">\n      <span class=\"delete-book\">&times;</span>\n    <h4>${book.title}</h4>\n    <ul>\n      <li>Author: ${book.title}</li>\n      <li>Pages: ${book.pages}</li>\n    </ul>\n    <label>\n      Read status:<input type=\"checkbox\" name=\"read\" ${book.read}>\n    </label>\n  </div>\n    `\n   container.innerHTML += html; })\n}\n\naddBook(\"The Hobbit\", \"J.R Tolkien\", 455, \"checked\");\nappendBooks();\n\n\n\n\n\n\n//# sourceURL=webpack://libraryapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;