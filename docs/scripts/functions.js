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

function print(data){
  console.log(data);
}

function openGitHub(){
  window.location.replace('https://github.com/gjhonic/notes');
}
