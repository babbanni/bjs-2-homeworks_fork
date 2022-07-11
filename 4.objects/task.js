function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...mark) {
    if (this.marks === undefined) {
        this.marks = [...mark];
    } else {
        this.marks.push(...mark);
    }
}


Student.prototype.getAverage = function() {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
        result = sum / this.marks.length;
        return result
    }

}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

studentFirst = new Student('Vlad', 'male', 24);
studentSecond = new Student('Arina', 'female', 18);
studentThird = new Student('Oleg', 'male', 30);