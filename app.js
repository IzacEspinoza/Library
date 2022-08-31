
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

//Embed the book objects made from the form input to the DOM
const embedElements = () => {
    let display = myLibrary.toString();
    document.getElementById('test').innerHTML = display;
}

/*************************************************** */

//our bookshelf
let bookCase = document.querySelector('bookshelf');

//All book objects stored in this array
let myLibrary = [];

//store users inputs for the new book to add
let title = document.querySelector('[name="title"]');
let author = document.querySelector('[name="author"]');
let pageCount = document.querySelector('[name="page-count"]');
let haveRead = document.querySelector('[name="read"]');


//create book button, creates new book from users input and adds to library[]
const createBook = document.getElementById("createBook");

createBook.onclick = function(){

    //create a new book object from users input
    let newBook = new Book(title.value, author.value, pageCount.value, haveRead.value);
    addBook(newBook);
    //embed the Book objects and display in DOM
    embedElements();

    //reset inputs for next book
    title.value = '';
    author.value = '';
    pageCount.value = '';
    haveRead = '';

    //close the form after hittingh button again
    bookform.style.visibility = 'hidden';

}




