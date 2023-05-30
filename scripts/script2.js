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


function stockTable() {
    let bigTable = document.getElementById('finance');


    //создаем таблицу и выводим в нее значения из массивов
    let date = ['28.04.2023','27.04.2023', '26.04.2023', '  25.04.2023', '24.04.2023', '21.04.2023', '20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023', 
                '14.04.2023', '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', '06.04.2023',  '05.04.2023', '04.04.2023', '03.04.2023'];
                
    let closePrice = [0.22, 0.23, 0.23, 0.23, 0.24, 0.24, 0.24, 0.24, 0.25, 0.23,
                      0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.22, 0.20, 0.20];
    
    let turnover = ['7 078 997', '1 318 578', '1 622 235', '9 131 393', '1 919 693', '2 622 562', '3 245 055', '10 750 972', '17 665 758', '2 272 446', 
                     '530 078', '1 005 920', '2 686 513', '3 691 967', '9 362 890', '3 651 992', '20 872 949', '22 749 324', '5 906 930', '2 841 518'];

    let deals = [711, 316, 305, 1190, 311, 469, 646, 1865, 1737, 486,
                 227, 267, 499, 665, 1437, 674, 2703, 2249, 490, 338];

    let space1 = document.createElement('td');
    space1.textContent = ' ';
    let space2 = document.createElement('td');
    space2.textContent = ' ';
    let space3 = document.createElement('td');
    space3.textContent = ' ';
    let space4 = document.createElement('td');
    space4.textContent = '.';
    space4.style.color = 'white';

    let row1 = document.createElement('tr');
    let header1 = document.createElement('td');
    header1.innerHTML = 'Дата';
    header1.style.textAlign = 'left';
    header1.style.fontSize = '0.8vw';
    header1.style.color = '#b70037';
    row1.appendChild(header1);
    row1.appendChild(space1);

    for (let i = date.length - 1; i > -1; i--) {

        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        cell1.style.fontSize = '0.5vw';
        if (i % 2 == 1) {
            cell1.style.color = 'gray';
        }
        row1.appendChild(cell1);
        bigTable.appendChild(row1);
    }

    let row2 = document.createElement('tr');
    let header2 = document.createElement('td');
    header2.innerHTML = 'Цена';
    header2.style.textAlign = 'left';
    header2.style.fontSize = '0.8vw';
    header2.style.color = '#b70037';
    row2.appendChild(header2);
    row2.appendChild(space2);


    for (let i = closePrice.length - 1; i > -1; i--) {

        let cell2 = document.createElement('td');
        cell2.innerHTML = closePrice[i];
        cell2.style.textAlign = 'center';
        cell2.style.fontSize = '0.6vw';
        if (i % 2 == 1) {
            cell2.style.color = 'gray';
        }
        row2.appendChild(cell2);
        bigTable.appendChild(row2);
    }

    let row3 = document.createElement('tr');
    let header3 = document.createElement('td');
    header3.innerHTML = 'Оборот';
    header3.style.textAlign = 'left';
    header3.style.fontSize = '0.8vw';
    header3.style.color = '#b70037';
    row3.appendChild(header3);
    row3.appendChild(space3);

    for (let i = turnover.length - 1; i > -1; i--) {

        let cell3 = document.createElement('td');
        cell3.innerHTML = turnover[i];
        cell3.style.textAlign = 'center';
        cell3.style.fontSize = '0.58vw';
        if (i % 2 == 1) {
            cell3.style.color = 'gray';
        }
        row3.appendChild(cell3);
        bigTable.appendChild(row3);
    }

    let row4 = document.createElement('tr');
    let header4 = document.createElement('td');
    header4.innerHTML = 'Кол-во<br>сделок';
    header4.style.textAlign = 'left';
    header4.style.fontSize = '0.8vw';
    header4.style.color = '#b70037';
    row4.appendChild(header4);
    row4.appendChild(space4);

    for (let i = deals.length - 1; i > -1; i--) {

        let cell4 = document.createElement('td');
        cell4.innerHTML = deals[i];
        cell4.style.textAlign = 'center';
        cell4.style.fontSize = '0.6vw';
        if (i % 2 == 1) {
            cell4.style.color = 'gray';
        }
        row4.appendChild(cell4);
        bigTable.appendChild(row4);
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
