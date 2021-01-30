//Возвращает текущую дату
function NowDate() {
  let now = new Date();
  let mont = (parseInt(now.getMonth())+1);
  mont.toString();
  return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" "+now.getDate()+":"+mont+":"+now.getFullYear();
}

//Возвращает текущее Время
function NowTime() {
  let now = new Date()
  return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
}

//Записывает лог
function addLog(title) {
    let logs = document.getElementById("display-logs");
    logs.innerHTML += "["+NowTime()+"]🢒"+title+"<br>";
}

//Изменение времени на сайте
function updateClock() {
    var now = new Date(); // current date
    var mont = (parseInt(now.getMonth())+1);
    mont.toString()
    time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea
    date = [now.getDate(),
              mont,
              now.getFullYear()].join(':');
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}

//Функция рисует форму добавления заметки
function showFormCreateNote(){
  let formCreateNote = document.getElementById('internal-full-note');
  formCreateNote.innerHTML = "<div id='form-add-note'>"+
  "<h3>Добавление заметки</h3>"+
  "<label for='input-title'>Название заметки</label>"+
  "<input type='text' name='title_note' id='input-title'><br>"+
  "<label for='input-text'>Текст заметки</label>"+
  "<textarea name='text_note' id='input-text'></textarea><br>"+
  "<button onclick='saveNote()' id='button-add-note'>Добавить</button>"+
  "</div>";
}

//Функция рисует форму редактирования заметки
function showFormUpdateNote(id){
  let title = arr_notes[id].title;
  let text = arr_notes[id].text;
  let formCreateNote = document.getElementById('internal-full-note');
  formCreateNote.innerHTML = "<div id='form-add-note'>"+
  "<h3>Редактирование заметки</h3>"+
  "<label for='input-title'>Название заметки</label>"+
  "<input type='text' name='title_note' id='input-title' value='"+title+"'><br>"+
  "<label for='input-text'>Текст заметки</label>"+
  "<textarea name='text_note' id='input-text'>"+text+"</textarea><br>"+
  "<button onclick='changeNote("+id+")' id='button-add-note'>Изменить</button>"+
  "</div>";
}

//Функция убирает форму добавления заметки
function clearFormCreateNote(){
    document.getElementById('internal-full-note').innerHTML = '';
}

function print(data){
  console.log(data);
}

function openGitHub(){
  window.location.replace('https://github.com/gjhonic/notes');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
