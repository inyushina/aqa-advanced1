

import { Book } from './Book.js';
import { EBook } from './EBook.js';


const bookInfo1 = new Book("Harry Potter","J.K.Rowling", 1998);
const bookInfo2 = new Book("The Hobbit, or There and Back Again", "J. R. R. Tolkien", 1937);
const bookInfo3 = new Book("Goldfinger", "Ian Fleming's", 1959)
const bookInfo4 = new Book(null, undefined, 1965)
const bookInfo5 = new Book("", "J.K.Rowling", "1989");
const bookInfo6 = new Book("Inferno", "Dante Aligheri", 1666);



bookInfo1.printInfo();
bookInfo2.printInfo();
bookInfo3.printInfo();
bookInfo4.printInfo();
bookInfo5.printInfo();
bookInfo6.printInfo();

const eBook1 = new EBook("Harry Potter","J.K.Rowling", 1998, ".ePub");
const eBook2 = new EBook("Goblet of Fire","J.K.Rowling", 2009, ".pdf");
const eBook3 = new EBook("Chamber of Secrets","J.K.Rowling", 2000, ".txt");
const eBook4 = new EBook("Chamber of Secrets","J.K.Rowling", 2000, "");
const eBook5 = new EBook("","J.K.Rowling", 1998, ".ePub");

eBook1.printInfo();
eBook2.printInfo();
eBook3.printInfo();
eBook4.printInfo();
eBook5.printInfo();

const books = [bookInfo1, bookInfo2, bookInfo3, bookInfo4, bookInfo5, bookInfo6,eBook1, eBook2, eBook3, eBook4,eBook5];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга: ");
oldestBook.printInfo();



const ebookFromBook = EBook.fromBook(bookInfo1, 'MOBI');
ebookFromBook.printInfo();
