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

// Library Funtions

const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = null;
}

function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
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
})

submitBtn.addEventListener("click", () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const read = bookRead.checked;

  addBookToLibrary(title, author, pages, read);
})