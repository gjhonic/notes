//Возвращает текущую дату
function NowDate() {
  let now = new Date()
  return now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" "+now.getDate()+":"+now.getMonth()+":"+now.getFullYear();
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
    var now = new Date(), // current date
        time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea
        date = [now.getDate(),
                now.getMonth(),
                now.getFullYear()].join(':');
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}

function print(data){
  console.log(data);
}

function openGitHub(){
  window.location.replace('https://github.com/gjhonic/notes');
}
