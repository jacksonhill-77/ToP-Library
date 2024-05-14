class Book {
  constructor(title, author, pages, read, index) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
    this.index = index;
  }
}

class Library {
  
  myLibrary = [];

  constructor() {
    this.myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, false, 0));
    this.myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 324, true, 1));
    this.myLibrary.push(new Book("1984", "George Orwell", 328, true, 2));
    this.myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 432, false, 3));
    this.myLibrary.push(new Book("The Catcher in the Rye", "J.D. Salinger", 224, false, 4));
  }

  generateBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
  
    let read = false;
    document.querySelector('#read').value == "y" ? read = true : read = false;
  
    const index = this.myLibrary.length;
    const book = new Book(title, author, pages, read, index);
  
    return book;
  }
  
  createCardInfoDiv(book, div) {
    const infoDiv = document.createElement('div');
    const bookTitle = document.createElement("h4");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
  
    infoDiv.classList.add('info')
  
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;
  
    bookAuthor.classList.add("body");
    bookAuthor.textContent = `By ${book.author}`;
  
    bookPages.classList.add("body");
    bookPages.textContent = `${book.pages} pages`;
  
    infoDiv.appendChild(bookTitle);
    infoDiv.appendChild(bookAuthor);
    infoDiv.appendChild(bookPages);
  
    return infoDiv;
  }
  
  createIsBookReadDiv(book) {
    const bookRead = document.createElement('div');
    const bookReadCheckbox = document.createElement("input");
    bookRead.classList.add('read');
    bookReadCheckbox.type = 'checkbox'
    bookReadCheckbox.id = 'read-book';
    bookReadCheckbox.name = 'read-book';
    book.read == true ? bookReadCheckbox.checked = true : bookReadCheckbox.checked = false;
    bookReadCheckbox.addEventListener('change', function(e) {
      label = document.querySelector(`div[data-index="${book.index}"] label`);
      if (e.target.checked) {
        label.textContent = 'Read';
      } else {
        label.textContent = 'Unread';
      }
    })
    let bookReadLabel = document.createElement("label");
    bookReadLabel.classList.add("body");
    bookReadLabel.for = 'read-book';
    book.read == true ? bookReadLabel.textContent = 'Read' : bookReadLabel.textContent = 'Unread'; 
  
    bookRead.appendChild(bookReadCheckbox);
    bookRead.appendChild(bookReadLabel);
  
    return bookRead
  }
  
  createRemoveButton(book) {
    let bookRemoveButton = document.createElement('button');
    bookRemoveButton.classList.add('remove')
    bookRemoveButton.textContent = 'Remove book'
    bookRemoveButton.addEventListener('click', () => {
      document.querySelector(`[data-index="${book.index}"]`).remove();
    })
  
    return bookRemoveButton;
  }

  addBookInfoToDiv(book, div) {
    const infoDiv = this.createCardInfoDiv(book, div);
    const bookRemoveButton = this.createRemoveButton(book);

    infoDiv.appendChild(this.createIsBookReadDiv(book));
  
    div.setAttribute('data-index',`${book.index}`);
    div.appendChild(infoDiv);
    div.appendChild(bookRemoveButton);
  }

  addBookDivToContainer(book, container) {
    let bookElement = document.createElement("div");
    bookElement.classList.add("card");
  
    this.addBookInfoToDiv(book, bookElement);
    container.appendChild(bookElement);
  }

  addBooksToContainer() {
    if (document.querySelector('.container')) {
      document.querySelector('.container').remove();
    };
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add('container')
    
    for (const book of this.myLibrary) {
      this.addBookDivToContainer(book, container)
    }
  }

  addBooksViaForm(e) {
    e.preventDefault();

    const book = this.generateBook();
    this.myLibrary.push(book)
    this.addBooksToContainer();
  }
}

// For initialisation of dummy books

const library = new Library;
library.addBooksToContainer()

const container = document.getElementById("container");
const dialog = document.querySelector("#dialog");
const form = document.querySelector("#form");
const showButton = document.querySelector("#show-button");
const hideButton = document.querySelector("#hide-button");

form.addEventListener('submit', (e) => {
  library.addBooksViaForm(e)
});

showButton.addEventListener("click", () => {
  dialog.showModal();
});

hideButton.addEventListener("click", () => {
  dialog.close();
});


