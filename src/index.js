class Student {
    constructor(name, lastName, birthYear, course) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.course = course;
        this.grades = [];
        this.attendance = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    addAttendance(attendance) {
        this.attendance.push(attendance);
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sumOfGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
        return sumOfGrades / this.grades.length;
    }

    getAverageAttendance() {
        if (this.attendance.length === 0) {
            return 0;
        }
        const sumOfAttendance = this.attendance.reduce((sum, attendance) => sum + attendance, 0);
        return sumOfAttendance / this.attendance.length;
    }

    getNumberOfClassesAttended() {
        return this.attendance.length;
    }

    changeCourse(newCourse) {
        this.course = newCourse;
    }

    getInfo() {
        return `Name: ${this.name}\nLast Name: ${this.lastName}\nBirth Year: ${this.birthYear}\nCourse: ${this.course}\nGrades: ${this.grades.join(', ')}\nAttendance: ${this.attendance.join(', ')}\nAverage Grade: ${this.getAverageGrade()}\nAverage Attendance: ${this.getAverageAttendance()}\nNumber of Classes Attended: ${this.getNumberOfClassesAttended()}`;
    }
}

const student1 = new Student("Kostiantyn", "Zhulinas", 1994, 1);
student1.addGrade(0);
student1.addGrade(100);
student1.addAttendance(1);
student1.addAttendance(0);
console.log(student1.getInfo());
