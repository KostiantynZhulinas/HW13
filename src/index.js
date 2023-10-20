function Student(name, surname, birthYear, course) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.course = course;
    this.grades = [];
    this.attendance = [];
}

Student.prototype.addGrade = function (grade) {
    this.grades.push(grade);
}

Student.prototype.addAttendance = function (attendance) {
    this.attendance.push(attendance);
}

Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) {
        return 0;
    }
    var sum = this.grades.reduce(function (a, b) {
        return a + b;
    });
    return sum / this.grades.length;
}

Student.prototype.getAverageAttendance = function () {
    if (this.attendance.length === 0) {
        return 0;
    }
    var sum = this.attendance.reduce(function (a, b) {
        return a + b;
    });
    return sum / this.attendance.length;
}

Student.prototype.getNumberOfClasses = function () {
    return this.attendance.length;
}

Student.prototype.changeCourse = function (newCourse) {
    this.course = newCourse;
}

Student.prototype.getInformation = function () {
    return "Name: " + this.name + "\nSurname: " + this.surname + "\nBirth Year: " + this.birthYear + "\nCourse: " + this.course + "\nGrades: " + this.grades.join(", ") + "\nAttendance: " + this.attendance.join(", ");
}
Student.prototype.getAverageAttendancePercentage = function () {
    if (this.attendance.length === 0) {
        return "No attendance data available.";
    }
    
    var sum = this.attendance.reduce(function (a, b) {
        return a + b;
    });
    
    var averageAttendancePercentage = (sum / this.attendance.length) * 100;
    
    return averageAttendancePercentage.toFixed(1) + "%";
}

function JuniorStudent(name, surname, birthYear, course, gradeCount, classCount) {
    Student.call(this, name, surname, birthYear, course);
    this.grades = Array(gradeCount).fill(0);
    this.attendance = Array(classCount).fill(0);
}

JuniorStudent.prototype = Object.create(Student.prototype);

var student = new JuniorStudent("Kostiantyn", "Zhulinas", 1994, 1, 0, 0);

student.addGrade(100);
student.addGrade(0);
student.addGrade(100);
student.addAttendance(1);
student.addAttendance(0);
student.addAttendance(0);


console.log(student.getInformation());
console.log("Average Grade: " + student.getAverageGrade().toFixed(1));
console.log("Average Attendance: " + student.getAverageAttendancePercentage());
console.log("Number of Attended Classes: " + student.getNumberOfClasses());
