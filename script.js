function Book(title, author, pages) {
  this.title = title;
  this.author = author; 
  this.pages = pages;
}

function generateBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const book = new Book(title, author, pages);
  return book;
}

function addBookInfoToDiv(book, div) {
  let bookTitle = document.createElement("h4");
  bookTitle.classList.add("title");
  bookTitle.textContent = book.title;
  let bookAuthor = document.createElement("p");
  bookAuthor.classList.add("body");
  bookAuthor.textContent = book.author;
  let bookPages = document.createElement("p");
  bookPages.classList.add("body");
  bookPages.textContent = book.pages;

  div.appendChild(bookTitle);
  div.appendChild(bookAuthor);
  div.appendChild(bookPages);
}

function addBookDivToContainer(book, container) {
  let bookElement = document.createElement("div");
  bookElement.classList.add("card");

  addBookInfoToDiv(book, bookElement);
  container.appendChild(bookElement);
}

// For initialisation of dummy books

function addBooksToContainer() {
  const container = document.getElementById("container");
  
  for (const book of myLibrary) {
    addBookDivToContainer(book, container)
  }
}



const myLibrary = [];
const container = document.getElementById("container");
const dialog = document.querySelector("#dialog");

const form = document.querySelector("#form");
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const book = generateBook();
  addBookDivToContainer(book, container);
})

const showButton = document.querySelector("#show-button");
showButton.addEventListener("click", () => {
  dialog.showModal();
});

const hideButton = document.querySelector("#hide-button");
hideButton.addEventListener("click", () => {
  dialog.close();
});

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 324);
const book3 = new Book("1984", "George Orwell", 328);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 432);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 224);

myLibrary.push(book1, book2, book3, book4, book5);
addBooksToContainer()


