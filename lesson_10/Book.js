

export class Book {
    constructor(title, author, published) {
        this.title = title;
        this.author = author;
        this.published = published;
        
   
    }
    
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '' ){
            console.log("No data is available for this combination");
            this._title = "Wrong data entered of information is missing";
        }else{ 
            this._title = value
        }
       
    };
    get title() {
        return this._title;
     };

    set author(value) {
        if (value  === null || value=== undefined || value !== 'string') {
            console.log("No data is available for this combination");
            this._author = "Wrong data entered of information is missing";
        }else{ 
            this._author = value
        }  
    };
    get author() {
        return this._author;
     };

    set published(value) {
        if (Number.isInteger(value) || value < 0){
            console.log("No data is available for this combination");
            this._published = "Wrong data entered of information is missing";
        }else{ 
            this._published = value
        }
       
    };
    get published() {
        return this._published;
     };
    
printInfo(){
    console.log(`Book title: ${this.title} , authour: ${this.author}, publication date: ${this.published}`)
}

static findOldestBook(books) {
            return books.reduce((oldest, current) => {
                return current.published < oldest.published ? current : oldest;
            });
}    


  

}
// const bookInfo1 = new Book("Harry Potter","J.K.Rowling", 1998);
// const bookInfo2 = new Book("The Hobbit, or There and Back Again", "J. R. R. Tolkien", 1937);
// const bookInfo3 = new Book("Goldfinger", "Ian Fleming's", 1959)
// const bookInfo4 = new Book(null, undefined, 1965)
// const bookInfo5 = new Book("", "J.K.Rowling", "1989'");
// const bookInfo6 = new Book("Inferno", "Dante Aligheri", "1666");

// const books = [bookInfo1, bookInfo2, bookInfo3, bookInfo4, bookInfo5, bookInfo6,EBook.eBook1,EBook.eBook2, EBook.eBook3];

// const oldestBook = Book.findOldestBook(books);
// console.log("Найдавніша книга: ");
// oldestBook.printInfo();

// bookInfo1.printInfo();
// bookInfo2.printInfo();
// bookInfo3.printInfo();
// bookInfo4.printInfo();
// bookInfo5.printInfo();
// bookInfo6.printInfo();



// export default Book;
     
    
