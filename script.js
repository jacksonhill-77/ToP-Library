function Book(title, author, pages, read) {
  this.title = title;
  this.author = author; 
  this.pages = pages;
  this.read = read;
}

function generateBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  let read = false;
  document.querySelector('#read').value == "y" ? read = true : read = false;
  const book = new Book(title, author, pages, read);
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
  bookPages.textContent = `${book.pages} pages`;
  let bookRead = document.createElement("p");
  bookRead.classList.add("body");
  book.read == true ? bookRead.textContent = 'Read' : bookRead.textContent = 'Unread';

  div.appendChild(bookTitle);
  div.appendChild(bookAuthor);
  div.appendChild(bookPages);
  div.appendChild(bookRead);
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

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, false);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);
const book3 = new Book("1984", "George Orwell", 328, true);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 432, false);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, false);

myLibrary.push(book1, book2, book3, book4, book5);
addBooksToContainer()


