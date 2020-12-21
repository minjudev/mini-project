/*
1. (v) 현재 날짜 배경색 다르게 
2. (v) 커서 움직이는 대로 배경색 다르게
3. 화살표 클릭하는 대로 년도 변경하기
4. 날짜 클릭하면 그 날짜에 해당하는 todo list 나오게 하기
5. 다른 날짜로 바뀌어도 특정 날짜에 입력한 todo list 고정시키기
6. (v) todo list 삭제 버튼
7. 이전달 날짜 클릭하면 해당 달로 이동하기
8. 특정 달 클릭하면 해당 달로 이동하기
*/

let createToDo = document.querySelector("#createToDo");
let createToDoBtn = document.querySelector("#createToDoBtn");
let toDo = document.querySelector("#toDo");

document.addEventListener('keydown', makeToDo);
function makeToDo(event) {
  if(event.keyCode === 13) {
    let toDoList = document.createElement('li');
    let delBtn = document.createElement('button');
    let span = document.createElement('span');
    toDoList.innerHTML = createToDo.value; 
    delBtn.innerHTML = '&Cross;'

    span.appendChild(delBtn);
    toDoList.appendChild(span);
    toDo.appendChild(toDoList);

    toDoList.className = 'toDoList';
    span.className = 'spanDelBtn';
    delBtn.className = 'delBtn';
    createToDo.value = '';  
  }
}

createToDoBtn.addEventListener('click', makeToDo2);
function makeToDo2() {
  let toDoList = document.createElement('li');
  let delBtn = document.createElement('button');
  let span = document.createElement('span');
  toDoList.innerHTML = createToDo.value; 
  delBtn.innerHTML = '&Cross;'

  span.appendChild(delBtn);
  toDoList.appendChild(span);
  toDo.appendChild(toDoList);

  toDoList.className = 'toDoList';
  span.className = 'spanDelBtn';
  delBtn.className = 'delBtn';
  createToDo.value = ''; 
}

toDo.addEventListener('click', deleteToDo);
function deleteToDo(event) {
  let target = event.target;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

let dt = new Date();

let weekday = new Array();
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

document.querySelector('#currentDate').innerHTML = dt.getDate();
document.querySelector('#currentDay').innerHTML = weekday[dt.getDay()];

const AVAILABLE_WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const localStorageName = 'calendar-events';

class CALENDAR {
  constructor(options) {
    this.options = options;
  }
}