function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
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
    let sum = this.grades.reduce(function (a, b) {
        return a + b;
    });
    let averageGrade = sum / this.grades.length;
    return averageGrade.toFixed(1);
}
Student.prototype.getAverageAttendance = function () {
    if (this.attendance.length === 0) {
        return 0;
    }
    let sum = this.attendance.reduce(function (a, b) {
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
    return{
        firstName: this.firstName,
        lastName: this.lastName,
        birthYear: this.birthYear,
        course: this.course,
        grades: this.grades,
        attendance: this.attendance,
    };
    }      
Student.prototype.getAverageAttendancePercentage = function () {
    if (this.attendance.length === 0) {
        return "No attendance data available.";
    }
    
    let sum = this.attendance.reduce(function (a, b) {
        return a + b;
    });
    
    let averageAttendancePercentage = (sum / this.attendance.length) * 100;
    
    return averageAttendancePercentage.toFixed(1) + "%";
}

let student = new Student("Kostiantyn", "Zhulinas", 1994, 1, 0, 0);

student.addGrade(100);
student.addGrade(0);
student.addGrade(100);
student.addAttendance(1);
student.addAttendance(0);
student.addAttendance(0);


console.log(student.getInformation());
console.log("Average Grade: " + student.getAverageGrade());
console.log("Average Attendance: " + student.getAverageAttendancePercentage());
console.log("Number of Attended Classes: " + student.getNumberOfClasses());
