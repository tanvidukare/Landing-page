document.addEventListener("DOMContentLoaded", function() {
    var bookList = document.getElementById("book-list");
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");

    // Dummy book data
    var books = [
      {
        title: "Book 1",
        author: "Author 1",
        description: "Description of Book 1"
      },
      {
        title: "Book 2",
        author: "Author 2",
        description: "Description of Book 2"
      },
      {
        title: "Book 3",
        author: "Author 3",
        description: "Description of Book 3"
      }
    ];

    // Display books
    function displayBooks(books) {
      bookList.innerHTML = "";

      for (var i = 0; i < books.length; i++) {
        var book = books[i];

        var bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        var title = document.createElement("h2");
        title.classList.add("book-title");
        title.textContent = book.title;

        var author = document.createElement("p");
        author.classList.add("book-author");
        author.textContent = "By " + book.author;

        var description = document.createElement("p");
        description.classList.add("book-description");
        description.textContent = book.description;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(description);

        bookList.appendChild(bookCard);
      }
    }

    // Search for books
    searchButton.addEventListener("click", function() {
      var searchTerm = searchInput.value.trim().toLowerCase();
      var filteredBooks = [];

      if (searchTerm !== "") {
        filteredBooks = books.filter(function(book) {
          return (
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
          );
        });
      } else {
        filteredBooks = books;
      }

      displayBooks(filteredBooks);
    });

    // Initial display of all books
    displayBooks(books);
  });
  