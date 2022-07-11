class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        return this.state = this.state * 1.5;
    }

    set state(count) {
        if (count < 0) {
            count = 0;
        } else if (count > 100) {
            count = 100;
        } else {
            this.state === count;
        }
        this._state = count;
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Book extends PrintEditionItem {
    constructor(author, releaseDate, pagesCount, state, type = "book") {
        super(releaseDate, pagesCount, state);
        this.author = author;
        this.type = type;
    }
}

class NovelBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type = "novel") {
        super(author, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type = "fantastic") {
        super(author, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type = "detective") {
        super(author, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                bookName = this.books[i];
                this.books.splice(i, 1);
                return bookName
            }
        }
        return null
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    setSubject(subjectName) {
        this.marks[subjectName] = subjectName;
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5"
        }

        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }

    getAverage() {}

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }

    getAverageBySubject(subjectName) {
        let sum = 0;
        for (let i = 0; i < this.marks[subjectName].length; i++) {
            sum += this.marks[subjectName][i];
        }
        return (sum / this.marks[subjectName].length)
    }
}

const student = new Student("Олег Никифоров");