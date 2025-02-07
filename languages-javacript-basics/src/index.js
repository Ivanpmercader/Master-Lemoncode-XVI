import './styles.scss';


console.log('------------------------------- 1 => Arrays -------------------------------');
//1 
const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['e', 'f', 'g'];

//Head
const head = ([first]) => first;
console.log(head(arr1));

//Tail
const tail = ([,...rest]) => rest;
console.log(tail(arr1));

//Init
const init = a => a.slice(0,-1);
console.log(init([...arr1]));

//Last
const last = a => a.pop();
console.log(last([...arr1]));

console.log('------------------------------- 2 => Concat -------------------------------');
//2

//Concat
const arr3 = ['h', 'i', 'j'];
const concat = (a, b) => [...a, ...b];
console.log(concat(arr1, arr2));

//Optional
const concatMultiple = (...arrs) => {
    let aux = [];
    arrs.map(arr => {
        aux = concat(aux, arr);
    })
    return aux;
};
console.log(concatMultiple(arr1, arr2, arr3, ['k', 'l'], ['m', 'n', 'o']));


console.log('---------------------------- 3 => Clone Merge -----------------------------');
//3
const maria = { name: "Maria", surname: "Ibañez", country: "SPA" };
const luisa = { name: "Luisa", age: 31, married: true };

//Clone 
const clone = (source) => ({...source});
const clon = clone(maria)
console.log(clon, clon === maria);

//Merge
const merge = (a,b) => ({...b, ...a});

const useCloneInMerge = (a,b) => ({...clone(b), ...clone(a)});

console.log(merge(luisa, maria));
console.log(useCloneInMerge(luisa, maria));


console.log('----------------------------- 4 => Read Books -----------------------------');
//4

//Read Books
const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

const isBookRead = (books, title) => books.some(book => book.title === title && book.isRead);

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


console.log('---------------------------- 5 => Slot Machine ----------------------------');
//5

//Slot Machine
class SlothMachine {
    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins += 1;
        [this.one, this.two, this.three] = [this.calcRandom(), this.calcRandom(), this.calcRandom()];
        if (this.one && this.two && this.three === true) {
            console.log(`Congratulations!!!.You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }

    calcRandom() {
        return (Math.round(Math.random()) === 1) ? true : false;
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();