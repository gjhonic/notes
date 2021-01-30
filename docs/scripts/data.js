//Имя пользователя
let notek_username =  localStorage.getItem('notek_username');

//JSON заметок
var arr_notes = [];
if (localStorage.getItem('data_note'))
  arr_notes = JSON.parse(localStorage.getItem('data_note'));

let System_Data = {
  version: "0.1.6",
  author: "Андреев Евгений",
};

//Полезные массивы
let DefaultName = [
  'Рик', "Шнючело", 'Говнокодер', 'Lukoil', 'Grenka', 'Промис', 'Ондий', 'KonoIridan', '<span style="color:red">Dont_Gjhonic</span>', 'Сосика', 'Da', 'ShelHellix'
]