'use strict';
//library selectors
const container = document.querySelector(".container");
const card = container.querySelector(".card");
//modal selectors
const openModal = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const deleteBook = document.querySelector*(".delete-book");
//get input values on submit button
document.getElementById("form").onsubmit = function() {
const formTitle = document.getElementById("title").value;
const formAuthor = document.getElementById("author").value;
const formPages = document.getElementById("pages").value;
const formReadStatus = document.getElementById("readStatus").value;
  //code
  addBook(formTitle, formAuthor, formPages, formReadStatus);
  container.innerHTML = "";
  appendBooks();
  return false;
};

const formSubmit = document.getElementById("submit");

card.addEventListener("click", (e) => console.log(e.parentELement))

// Modal code
openModal.addEventListener("click", () => modalContainer.classList.add('show'));
closeModal.addEventListener("click", () => modalContainer.classList.remove('show'));
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) modalContainer.classList.remove('show');
});

// Library code
// card.addEventListener("click", (e) => {
//   console.log(e.target);
//   if(e.target.matches("input")) e.target.classList.toggle('read');
// })

let myLibrary = [];
//constructor
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
    console.log(book)
    let html = `
    <div class="card" data-index="${myLibrary.indexOf(book)}">
      <span class="delete-book">&times;</span>
    <h4>${book.title}</h4>
    <ul>
      <li>Author: ${book.title}</li>
      <li>Pages: ${book.pages}</li>
    </ul>
    <label>
      <input type="checkbox" name="read" id="">
    </label>
  </div>
    `
   container.innerHTML += html; })
}

// deleteBook.addEventListener("click", (e) => {
//   if(e.target === deleteBook) {
    
//   }
// } )


addBook("The Hobbit", "J.R Tolkien", 455, true);
addBook("Harry Potter", "J.K Rowling", 600, true);
addBook("Harry Pott", "J.K Rowling", 600, false);
appendBooks();
console.log(myLibrary)


