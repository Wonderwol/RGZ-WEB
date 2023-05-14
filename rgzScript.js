
let teacherOffsetLeft = 0;
let studentOffsetLeft = 750;
let lecturerOffsetLeft = 1500;

function slideNameLeft() {
    let teacher = document.getElementById('teacher');
    let student = document.getElementById('student');   
    let lecturer = document.getElementById('lecturer');
    
    if (studentOffsetLeft == 750){
        student.style.transform = 'translateX(-750px)';
        lecturer.style.transform = 'translateX(-750px)';
        studentOffsetLeft -= 750;
        lecturerOffsetLeft -= 750;
    }
    
    if (teacherOffsetLeft == 750) {
        teacher.style.transform = 'translateX(-750px)';
        student.style.transform = 'translateX(0px)';
        teacherOffsetLeft -= 750;
        studentOffsetLeft -= 750;
    }
}

function slideNameRight() {

    let student = document.getElementById('student');
    let teacher = document.getElementById('teacher');
    let lecturer = document.getElementById('lecturer');

    if (studentOffsetLeft == 750){
        student.style.transform = 'translateX(750px)';
        teacher.style.transform = 'translateX(750px)';
        studentOffsetLeft += 750;
        teacherOffsetLeft += 750;
    }

    if (lecturerOffsetLeft == 750) {
        lecturer.style.transform = 'translateX(750px)';
        student.style.transform = 'translateX(0px)';
        lecturerOffsetLeft += 750;
        studentOffsetLeft += 750;
    }
}