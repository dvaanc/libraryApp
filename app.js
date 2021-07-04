'use strict';

const container = document.querySelector(".container");
const card = document.querySelector(".card");

//modal selectors
const openModal = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const deleteBook = document.querySelector*(".delete-book");

//get input values + add book on submission
document.getElementById("form").onsubmit = function() {
const formTitle = document.getElementById("title").value;
const formAuthor = document.getElementById("author").value;
const formPages = document.getElementById("pages").value;
const formReadStatus = document.getElementById("readStatus").value;
  modalContainer.classList.remove('show');
  addBook(formTitle, formAuthor, formPages, formReadStatus);
  container.innerHTML = "";
  appendBooks();
  return false;
}

// modal 
openModal.addEventListener("click", () => modalContainer.classList.add('show'));
closeModal.addEventListener("click", () => modalContainer.classList.remove('show'));
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) modalContainer.classList.remove('show');
});

//delete card on click + toggle readStatus
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-book")) {
    const cardIndex = e.target.parentNode.dataset.index;
    myLibrary.splice(cardIndex, 1);
    e.target.parentNode.remove();
  };

  if (e.target.matches("input")) {
    if (e.target.checked) {
      e.target.parentNode.parentNode.classList.toggle("checked");
    } else { 
      e.target.parentNode.parentNode.classList.toggle("checked");
    }

  }
})

//toggle read status on click


//main logic
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () { 
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
}

let book1 = new Book ("Idk", "Danny", 355, "read")


function addBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}


function appendBooks() {
  myLibrary.forEach(book => { 
    
    let html = `
    <div class="card ${book.read}" data-index="${myLibrary.indexOf(book)}">
      <span class="delete-book">&times;</span>
    <h4>${book.title}</h4>
    <ul>
      <li>Author: ${book.title}</li>
      <li>Pages: ${book.pages}</li>
    </ul>
    <label>
      Read status:<input type="checkbox" name="read" ${book.read}>
    </label>
  </div>
    `
   container.innerHTML += html; })
}

addBook("The Hobbit", "J.R Tolkien", 455, "checked");
appendBooks();




