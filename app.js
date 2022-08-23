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
    //let removal = myLibrary.filter(book => book !== bookToBoot);
    myLibrary.splice(myLibrary.indexOf(bookToBoot), 1);
    return bookToBoot;
}

//test our functions
// addBook('The Witcher');
// addBook('Game of Thrones');
// addBook('Elden Ring');
// addBook('Harry Potter');


//Possible form pop up JS
/** 
 * var opener = document.getElementById("opener");

opener.onclick = function(){

    var lightbox = document.getElementById("lightbox"),
        dimmer = document.createElement("div");

    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';

    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);

    lightbox.style.visibility = 'visible';
    lightbox.style.top = window.innerHeight/2 - 50 + 'px';
    lightbox.style.left = window.innerWidth/2 - 100 + 'px';
    return false;
}
*/

