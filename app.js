
//Book CLASS here
class Book{
    //construct?
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    //methods?
}

//Class for the Library
class Library{
    constructor(){
        this.books = [];
    }
    //Methods?
    //add a book to Library
    addBook(newBook){
        //push that onto the myLibrary[]
        this.books.push(newBook);
        //return what book was added
        return newBook;
    }
    //remove book from Library
    removeBook(bookToBoot){
        myLibrary.splice(this.books.indexOf(bookToBoot), 1);
        return bookToBoot;
    }

}

//our bookshelf
let bookCase = document.querySelector('bookshelf');
//Form pop up code
const opener = document.getElementById("addBook");
//All book objects stored in this array
let myLibrary = new Library();
//create book button, creates new book from users input and adds to library[]
const createBook = document.getElementById("createBook");
//store users inputs for the new book to add
let title = document.querySelector('[name="title"]');
let author = document.querySelector('[name="author"]');
let pageCount = document.querySelector('[name="page-count"]');
let haveRead = document.querySelector('[name="read"]');

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
    
    let display = "<table border = '1 | 1' >";

    for(let i = 0; i < myLibrary.length; i++){
         
        display += '<th>';
        //Title
        display += '<td>' + myLibrary[i].title + '</br>' + '</td';
        //Author
        display += '<td>' + myLibrary[i].author + '</br>' + '</td';
        //Page Number
        display += '<td>' + myLibrary[i].pages + '</br>' + '</td';
        display += '<td>' + '<button>' + 'Remove book' + '</button>' + '</td>';   

    }//end loop

    //to DOM?
    document.getElementById("display").innerHTML = display;

    //log the current display content
    console.log(display);
}

createBook.onclick = function(){

    //create  Class of book instead of constructor
    let newBook = new Book(title.value, author.value, pageCount.value, haveRead.value);
    //addBook(newBook);
    myLibrary.addBook(newBook);
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
