//   Set Variables
const addBtn = document.querySelector(".addButton");
const removeBtn = document.querySelector(".removeButton");
const bookModal = document.querySelector(".modal");
const bookGrid = document.querySelector(".bookGrid");
const submitBtn = document.querySelector(".submitButton");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("isRead");

// Library Funtions

const myLibrary = [];

function Book(name, author, pages, state) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = state;
  this.info = function () {
    return name + " by " + author + ", " + pages + " pages, " + read + ".";
  };
}

function addBookToLibrary() {
  
}

// Event listeners

addBtn.addEventListener("click", () => {
  console.log("Button clicked!");
  bookModal.classList.add("active");
  bookGrid.classList.add("blurred");
});

