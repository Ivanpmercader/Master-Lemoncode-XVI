import './styles.scss';

//Read Books
interface Book {
    title: string;
    isRead: boolean;
}

const tsBooks: Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

const tsIsBookRead = (books: Book[], title: string) :boolean => books.some(book => book.title === title && book.isRead);

console.log(tsIsBookRead(tsBooks, "Devastación")); // true
console.log(tsIsBookRead(tsBooks, "Canción de hielo y fuego")); // false
console.log(tsIsBookRead(tsBooks, "Los Pilares de la Tierra")); // false