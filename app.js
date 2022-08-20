//All book objects stored in this array
let myLibrary = [];

//book constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//add a book to Library
function addBook(){
    //take user’s input 
    let info = prompt('stuff?');
    //store the new book objects into myLibrary[]
    myLibrary.push(info);


}

//test our constructor n stuff
let book1 = new Book('Witcher', 'Geralt', 200, 'read');
// console.log(book1);
let book2 = new Book('Ghost recon', 'Tom Clancy', 654, 'not read');

//testing our add book function
for(let i = 0; i < 4; i++){
    addBook();
}
console.log(myLibrary);
