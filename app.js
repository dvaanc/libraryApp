let container = document.querySelector(".container");
let card = container.querySelector(".card");

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
  for(const book in myLibrary) {
    
  }
}

addBook("The Hobbit", "J.R Tolkien", 455, "Read");
addBook("Harry Potter", "J.K Rowling", 600, "Read");
appendBooks();

