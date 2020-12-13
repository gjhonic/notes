//Имя пользователя
let notek_username =  localStorage.getItem('notek_username');

//JSON заметок
var arr_notes = [];
if (localStorage.getItem('data_note'))
  arr_notes = JSON.parse(localStorage.getItem('data_note'));

//Массив заметок
//let arr_notes = [];

let System_Data = {
  version: "0.1.4",
  author: "Андреев Евгений",
};

//Дополнительные функции

function print(data){
  console.log(data);
}
