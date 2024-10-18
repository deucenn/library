//   Set Variables
const addBtn = document.querySelector(".addButton");
const removeBtn = document.querySelector(".removeButton");
const bookModal = document.querySelector(".modal");
const bookGrid = document.querySelector(".bookGrid");
const submitBtn = document.querySelector(".submitButton");
const closeBtn = document.querySelector(".closeButton");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("isRead");

// Library Functions
const myLibrary = JSON.parse(localStorage.getItem("library")) || [];

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
  updateLocalStorage();
  displayLibrary();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  updateLocalStorage();
  displayLibrary();
}

function toggleBookStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  updateLocalStorage(); //
  displayLibrary(); //
}

function displayLibrary() {
  bookGrid.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const titleP = document.createElement("p");
    titleP.textContent = book.name;
    bookDiv.appendChild(titleP);

    const authorP = document.createElement("p");
    authorP.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorP);

    const pagesP = document.createElement("p");
    pagesP.textContent = `Pages: ${book.pages}`;
    bookDiv.appendChild(pagesP);

    const readP = document.createElement("p");
    readP.textContent = book.read ? "Status: Read" : "Status: Not Read";
    readP.classList.add("toggleStatus");
    readP.setAttribute("onclick", `toggleBookStatus(${index})`);
    bookDiv.appendChild(readP);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeButton");
    removeBtn.innerHTML = `<span class="material-icons-outlined redButton"> delete </span>`;
    removeBtn.setAttribute("onclick", `removeBook(${index})`);
    bookDiv.appendChild(removeBtn);

    bookGrid.appendChild(bookDiv);
  });
}

// Save library to localStorage
function updateLocalStorage() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

// Event listeners for modal
addBtn.addEventListener("click", () => {
  console.log("Button clicked!");
  bookModal.classList.add("active");
  bookGrid.classList.add("blurred");
});

closeBtn.addEventListener("click", () => {
  bookModal.classList.remove("active");
  bookGrid.classList.remove("blurred");
});

submitBtn.addEventListener("click", () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const read = bookRead.checked;

  if (title === "" || author === "" || pages === "") return;

  addBookToLibrary(title, author, pages, read);

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;

  bookModal.classList.remove("active");
  bookGrid.classList.remove("blurred");
});

// Initialize the library display on page load
document.addEventListener("DOMContentLoaded", () => {
  displayLibrary();
});
