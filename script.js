const myLibrary = []

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
