//All book objects stored in this array
let myLibrary = [];

//our bookshelf
let bookCase = document.querySelector('bookshelf');

//book constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//add a book to Library
function addBook(newBook){
    //push that onto the myLibrary[]
    myLibrary.push(newBook);
    //return what book was added
    return newBook;
}

//remove book from Library
function removeBook(bookToBoot){
    myLibrary.splice(myLibrary.indexOf(bookToBoot), 1);
    return bookToBoot;
}

//Form pop up code
const opener = document.getElementById("addBook");
//do this when user clicks 'add new book'
opener.onclick = function(){

    let bookform = document.getElementById("bookform"),
        dimmer = document.createElement("div");

    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';

    //pretty much dims page, so form pops out more
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        bookform.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);

    bookform.style.visibility = 'visible';
    bookform.style.top = window.innerHeight/2 - 50 + 'px';
    bookform.style.left = window.innerWidth/2 - 100 + 'px';
    return false;
}


