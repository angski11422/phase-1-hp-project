//global variables
let currentBook;



document.addEventListener('DOMContentLoaded', () => { 
    fetch('https://legacy--api.herokuapp.com/api/v1/books')
    .then(resp => resp.json())
    .then((books) => {
        books.forEach(book => {
            displayBooks(book); 
        })
    })
})

// display initial book list
function displayBooks(book) {
    const bookList = document.querySelector('.book-list');
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookList.append(bookTitle);
    bookTitle.addEventListener('click', () => {
        bookDetails(book);
    })
}

// display book details
function bookDetails(books) {
    //currentBook = books;
    const bookDeets = document.querySelector('.books-details');
    const bookImg = document.createElement('img');
    const bookName = document.createElement('h4');
    const bookAuthor = document.createElement('p');
    const releaseDate = document.createElement('p');
    bookImg.src = books.image_url;
    bookName.textContent = books.title;
    releaseDate.textContent = books.release_date;
    bookAuthor.textContent = books.artists[0].author.name;
    bookDeets.append(bookImg, bookName, bookAuthor, releaseDate);
    addReview();
}

// add reviews to books
function addReview() {
    const bookDeets = document.querySelector('.books-details');
    const reviewForm = document.createElement('form');
    const reviewText = document.createElement('input');
    const reviewSubmit = document.createElement('input');
    reviewText.type = 'text';
    reviewText.name ='review-input';
    reviewText.placeholder = 'Your Review Here';
    reviewSubmit.type ='submit';
    reviewSubmit.value = 'Add Review';
    reviewForm.append(reviewText, reviewSubmit);
    bookDeets.appendChild(reviewForm);
    
}
