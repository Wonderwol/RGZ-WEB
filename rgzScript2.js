
let teacherOffsetLeft = 0;
let studentOffsetLeft = 750;
let lecturerOffsetLeft = 1500;

function slideNameLeft() {
    let teacher = document.getElementById('teacher');
    let student = document.getElementById('student');   
    let lecturer = document.getElementById('lecturer');
    
    if (studentOffsetLeft == 750){
        student.style.transform = 'translateX(-375px)';
        lecturer.style.transform = 'translateX(-375px)';
        studentOffsetLeft -= 750;
        lecturerOffsetLeft -= 750;
    }
    
    if (teacherOffsetLeft == 750) {
        teacher.style.transform = 'translateX(-375px)';
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
        student.style.transform = 'translateX(375px)';
        teacher.style.transform = 'translateX(375px)';
        studentOffsetLeft += 750;
        teacherOffsetLeft += 750;
    }

    if (lecturerOffsetLeft == 750) {
        lecturer.style.transform = 'translateX(375px)';
        student.style.transform = 'translateX(0px)';
        lecturerOffsetLeft += 750;
        studentOffsetLeft += 750;
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

function stockTable() {
    let bigTable = document.getElementById('finance');
    bigTable.style.color = 'black';

    //Делаем заголовки
    let header1 = document.createElement("th");
    header1.innerHTML = "Дата";
    header1.style.color = '#b70037';
    bigTable.appendChild(header1);

    let header2 = document.createElement("th");
    header2.innerHTML = "Цена last";
    header2.style.color = '#b70037';
    bigTable.appendChild(header2);

    let header3 = document.createElement("th");
    header3.innerHTML = "Оборот";
    header3.style.color = '#b70037';
    bigTable.appendChild(header3);

    //создаем таблицу и выводим в нее значения из массивов
    let date = ['28.04.2023','27.04.2023', '26.04.2023', '  25.04.2023', '24.04.2023', '21.04.2023', '20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023', 
                '14.04.2023', '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', '06.04.2023',  '05.04.2023', '04.04.2023', '03.04.2023'];
    let closePrice = [0.22, 0.23, 0.23, 0.23, 0.24, 0.24, 0.24, 0.24, 0.25, 0.23,
                      0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.22, 0.20, 0.20];
    
    let turnover = ['7 078 997', '1 318 578', '1 622 235', '9 131 393', '1 919 693', '2 622 562', '3 245 055', '10 750 972', '17 665 758', '2 272 446', 
                     '530 078', '1 005 920', '2 686 513', '3 691 967', '9 362 890', '3 651 992', '20 872 949', '22 749 324', '5 906 930', '2 841 518'];          
     
    for (let i = 0; i < closePrice.length; i++) {
        let row = document.createElement('tr');

        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        row.appendChild(cell1);

        let cell2 = document.createElement('td');
        cell2.innerHTML = closePrice[i];
        cell2.style.textAlign = 'center';
        row.appendChild(cell2);

        let cell3 = document.createElement('td');
        cell3.innerHTML = turnover[i];
        cell3.style.textAlign = 'center';
        row.appendChild(cell3);
        finance.appendChild(row);
    }
  

        //выводим среднеквадратическое отклонение
        let priceSum = 0;
        for (let i = 0; i < closePrice.length; i++) {
            priceSum = priceSum + closePrice[i];
        }

        let stockAverage = priceSum / closePrice.length;
        let squared_diff_sum = 0;
        for (i = 0 ; i < closePrice.length; i++){
            squared_diff_sum = squared_diff_sum + (closePrice[i] - stockAverage) ** 2;
        }
        let st_deviation = (Math.sqrt(squared_diff_sum / closePrice.length)).toFixed(5);
        alert1 = document.getElementById('average');
        alert1.innerHTML = 'Среднеквадратическое отклонение: ' + st_deviation;



        //выводим минимальное значение
        let minValue = Math.min.apply(0, closePrice);
        alert2 = document.getElementById('minValue');
        alert2.innerHTML = 'Минимальное значение: ' + minValue;

        //выводим максимальное значение
        let maxValue = Math.max.apply(0, closePrice);
        alert3 = document.getElementById('maxValue');
        alert3.innerHTML = 'Максимальное значение: ' + maxValue;
      } 
stockTable()