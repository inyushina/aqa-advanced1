
import { Book } from './Book.js';


export class EBook extends Book {
    constructor (title, author, published, typeOfFile){
        super(title, author, published);
        this.typeOfFile = typeOfFile;
    }

set typeOfFile(value){
    if (!value || value === null || value === undefined){
        console.log("Incorrect data ")
        this._typeOfFile = "Wrong data entered of information is missing";
    } else {this._typeOfFile = value}
}
get typeOfFile(){
    return this._typeOfFile
}

    printInfo(){
console.log(`Ebooks info: title: ${this.title} , authour: ${this.author}, publication date: ${this.published}, type of file: ${this.typeOfFile}`)
    }

static fromBook(book, typeOfFile) {
            return new EBook(book.title, book.author, book.published, typeOfFile);
        }
    
}

// const eBook1 = new EBook("Harry Potter","J.K.Rowling", 1998, ".ePub");
// const eBook2 = new EBook("Goblet of Fire","J.K.Rowling", 2009, ".pdf");
// const eBook3 = new EBook("Chamber of Secrets","J.K.Rowling", 2000, ".txt");
// const eBook4 = new EBook("Chamber of Secrets","J.K.Rowling", 2000, "");
// const eBook5 = new EBook("","J.K.Rowling", 1998, ".ePub");

// eBook1.printInfo();
// eBook2.printInfo();
// eBook3.printInfo();
// eBook4.printInfo();
// eBook5.printInfo();
