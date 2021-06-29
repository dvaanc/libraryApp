'use strict';

const container = document.querySelector(".container");
const card = container.querySelector(".card");
const openModal = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");

// Modal code
openModal.addEventListener("click", () => modalContainer.classList.add('show'));
closeModal.addEventListener("click", () => modalContainer.classList.remove('show'));


// Library code
card.addEventListener("click", (e) => {
  console.log(e.target);
  if(e.target.matches("input")) e.target.classList.toggle('read');
})

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
    console.log(book)
    let html = `
    <div class="card">
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


addBook("The Hobbit", "J.R Tolkien", 455, "Read");
addBook("Harry Potter", "J.K Rowling", 600, "Read");
addBook("Harry Potter", "J.K Rowling", 600, "Read");
appendBooks();

console.log(myLibrary)

