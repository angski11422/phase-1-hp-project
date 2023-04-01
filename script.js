//global variables



document.addEventListener('DOMContentLoaded', () => { 
    fetch('https://legacy--api.herokuapp.com/api/v1/books')
    .then(resp => resp.json())
    .then((books) => {
        books.forEach(book => 
            {displayBooks(book);
        })
    })
})



function displayBooks(book) {
        const bookList = document.querySelector('.book-list');
        const bookTitle = document.createElement('h4');
        bookTitle.textContent = book.title;
        bookList.append(bookTitle);
}
