//Тут функции для работы с заметками
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
    addLog("Сreated note '"+ new_note.title+"'");
    arr_notes = JSON.parse(localStorage.getItem('data_note'));
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
      if(item != null){
        html_text += "<div class='list-internal' onclick='showNote("+i+")'>";
        html_text += item.title;
        html_text += "</div>";
      }
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
  addLog("All notes deleted");
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
      html_text += "<div class='buttons-full-note'>";
        html_text += "<span class='display-button' onclick='changeNote("+id+")'>Редактировать</span>";
        html_text += "<span class='display-button' onclick='deleteNote("+id+")'>Удалить</span>";
      html_text += "</div>";
      html_text += "</div>";
  }

  display_title_note.innerHTML = html_text;
}

//Функция изменения заметки
function changeNote(id){
  let title_note = prompt("Введите название заметки", arr_notes[id].title);
  let text_note = prompt("Введите текст заметки '"+title_note+"'", arr_notes[id].text);

  arr_notes[id].title = title_note;
  arr_notes[id].text = text_note;

  localStorage.setItem('data_note', JSON.stringify(arr_notes));
  addLog("Changed note '"+ new_note[id].title+"'");
  arr_notes = JSON.parse(localStorage.getItem('data_note'));
  updateDisplay();
  showNote(id);

}

//Функция удаления заметки
function deleteNote(id){
  let old_title = arr_notes[id].title;
  let answer = confirm("Вы действительно хотите удалить заметку: '"+old_title+"'?")
  if(answer == true){
    delete arr_notes[id];
    localStorage.setItem('data_note', JSON.stringify(arr_notes));
    addLog("Deleted note '"+ old_title+"'");
    updateDisplay();
  }
}

//Очищаем заметки
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
