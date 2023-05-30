let teacherOffsetLeft = 0;
let studentOffsetLeft = 750;
let lecturerOffsetLeft = 1500;

let leftArrow = document.getElementById('left_arrow')
let rightArrow = document.getElementById('right_arrow')

function slideNameLeft() {
    let teacher = document.getElementById('teacher');
    let student = document.getElementById('student');   
    let lecturer = document.getElementById('lecturer');
    
    if (studentOffsetLeft == 750){
        student.style.transform = 'translateX(-375px)';
        lecturer.style.transform = 'translateX(-375px)';
        studentOffsetLeft -= 750;
        lecturerOffsetLeft -= 750;
        leftArrow.style.color = 'gray';
    }
    
    if (teacherOffsetLeft == 750) {
        teacher.style.transform = 'translateX(-375px)';
        student.style.transform = 'translateX(0px)';
        teacherOffsetLeft -= 750;
        studentOffsetLeft -= 750;
        rightArrow.style.color = 'white'
    }
}

function slideNameRight() {

    let student = document.getElementById('student');
    let teacher = document.getElementById('teacher');
    let lecturer = document.getElementById('lecturer');

    if (studentOffsetLeft == 750){
        student.style.transform = 'translateX(375px)';
        teacher.style.transform = 'translateX(375px)';
        studentOffsetLeft += 750;
        teacherOffsetLeft += 750;
        rightArrow.style.color = 'gray';
    }

    if (lecturerOffsetLeft == 750) {
        lecturer.style.transform = 'translateX(375px)';
        student.style.transform = 'translateX(0px)';
        lecturerOffsetLeft += 750;
        studentOffsetLeft += 750;
        leftArrow.style.color = 'white'
    }
}

function setFixedOnScroll234() {
    let block = document.getElementById('menu');
    let blockOffsetTop = block.offsetTop;
  
    function handleScroll() {
      if (window.pageYOffset >= blockOffsetTop) {
        block.style.position = 'fixed';
        block.style.top = '0px';
        block.style.width = '101%';
        block.style.left = '0px';
        block.style.borderWidth = '3px';
        block.style.borderBottom = '2px #cbcfd6 solid';
      } 
      else {
        block.style.position = 'relative';
        block.style.width = '94vw';
      }

    }
    window.addEventListener('scroll', handleScroll);
}
setFixedOnScroll234()