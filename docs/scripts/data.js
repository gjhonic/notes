//Имя пользователя
let notek_username =  localStorage.getItem('notek_username');

//JSON заметок
var arr_notes = [];
if (localStorage.getItem('data_note'))
  arr_notes = JSON.parse(localStorage.getItem('data_note'));

let System_Data = {
  version: "0.1.5",
  author: "Андреев Евгений",
};
