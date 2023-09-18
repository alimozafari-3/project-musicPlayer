
let play = document.getElementById("playpus");
let audio = document.getElementById("audio");
let rangtme = document.querySelector(".zaman");
let dt2 = document.querySelector(".date2");
let dt1 = document.querySelector(".date1");
let nameplay1 = document.getElementById("nameplay");
let nameplay2 = document.getElementById("namemuzic");
let sefr = 0;
let date1 = 0;
let date2 = 0;
let setinter;
let setinterval;
let index = 0;

let track = [
    "./audio/behnam-bani.mp3",
    "./audio/Metallica-Nothing-Else.mp3",
    "./audio/Shahin Najafi.mp3",
  ];
  let ims = ["./img/behnam-img.jpg", "./img/metalica1.png", "./img/shahin-img.jpg"];
  let name1 = ["behnam bani", "metallica", "shahin najafi"];
  let name2 = ["ashghi", "Nothing Else Matters", "parvaz"];
  document.querySelector(".pas").classList.toggle("hiden");