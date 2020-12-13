//Возвращает текущую дату
function NowDate() {
  let now = new Date()
  return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" "+now.getDate()+":"+now.getMonth()+":"+now.getFullYear();
}

function NowTime() {
  let now = new Date()
  return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
}

//Записывает лог
function addLog(title) {
    let logs = document.getElementById("display-logs");
    logs.innerHTML += "["+NowTime()+"]🢒"+title+"<br>";
}

//Начальная инициализация
function init() {
  let version = document.getElementById("display-version");
  version.innerHTML = "Gjhonic v"+System_Data.version;

  if(notek_username == "" || notek_username == null){
    notek_username = prompt("Введите свое имя");
    localStorage.setItem('notek_username', notek_username);
  }
  //alert("Добро пожаловать в ваш компьютер "+notek_username)
  document.getElementById('name-pc').innerHTML = notek_username;

}

//Изменение времени на сайте
function updateClock() {
    var now = new Date(), // current date
        time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea
        date = [now.getDate(),
                now.getMonth(),
                now.getFullYear()].join(':');
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
// <---

//Функция добавления заметки
function addNote(){
    let title_note = prompt("Введите название заметки");
    let text_note = prompt("Введите текст заметки '"+title_note+"'");
    let date = new Date();
    let id =  ""+date.getFullYear()+date.getMonth()+date.getDate();

    let new_note = {
      date: NowDate(),
      title: title_note,
      text: text_note,
    }
    print(new_note);

    arr_notes.push(new_note);

    localStorage.setItem('data_note', JSON.stringify(arr_notes));
    addLog("Добавлена заметка '"+ new_note.title+"'");
    updateDisplay();
}

//Функция обновления дисплэя
function updateDisplay(){
  let display_title_note = document.getElementById('internal-title-note');
  let html_text = "";
  print(arr_notes);
  if(arr_notes==null || arr_notes.length == 0){
    arr_notes=[];
    html_text += "Нет заметок";
  }else{
    arr_notes.forEach(function(item, i, arr) {
      html_text += "<div class='list-internal' onclick='showNote("+i+")'>";
      html_text += item.title;
      html_text += "</div>";
    });
  }

  display_title_note.innerHTML = html_text;
}

//Функция чистит дисплэи
function clearDisplay(){
  let display_title_note = document.getElementById('internal-title-note');
  display_title_note.innerHTML = "";
  let display_full_note = document.getElementById('internal-full-note');
  display_full_note.innerHTML = "";
  addLog("Все заметки удалены");
}

//Функция показывает заметку
function showNote(id){
  let display_title_note = document.getElementById('internal-full-note');
  let html_text = "";
  if(arr_notes[id]==null){
    arr_notes=[];
    html_text = "Нет заметок";
  }else{
      html_text += "<div>";
      html_text += "<div class='title-full-note'>"+arr_notes[id].title+"</div>";
      html_text += "<div class='text-full-note'>"+arr_notes[id].text+"</div>";
      html_text += "<div class='date-full-note'>Дата создания "+arr_notes[id].date+"</div>";
      html_text += "</div>";
  }

  display_title_note.innerHTML = html_text;
}

function clearNote(){
  let answer = confirm("Вы действительно хотите удалить все заметки?")
  if(answer == true){
    localStorage.removeItem("data_note");
    arr_notes = [];
    clearDisplay();

  }
}

init();
updateClock(); // initial call
updateDisplay();
