const myLibrary = []
const bookInput = document.getElementById("book-input");
bookInput.addEventListener("click", addBookToLibrary);

function Book(title, author, pages) {
  this.title = title;
  this.author = author; 
  this.pages = pages;
}

function addBookToLibrary() {
  const title = prompt('Please enter the title of the book you wish to add to the library: ');
  const author = prompt('Please enter the author of the book you wish to add to the library: ');
  const pages = prompt('Please enter the amount of pages of the book you wish to add to the library: ');
  const book = new Book(title, author, pages);
  myLibrary.push(book);
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

function addBooksToContainer() {
  const container = document.getElementById("container");
  
  for (const book in myLibrary) {
    addBookDivToContainer(book, container)
  }
}
