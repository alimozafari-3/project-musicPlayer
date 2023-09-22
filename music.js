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
let ims = [
  "./img/behnam-img.jpg",
  "./img/metalica1.png",
  "./img/shahin-img.jpg",
];
let name1 = ["behnam bani", "metallica", "shahin najafi"];
let name2 = ["ashghi", "Nothing Else Matters", "parvaz"];
document.querySelector(".pas").classList.toggle("hiden");

play.addEventListener("click", () => {
  // document.getElementById("imgs").classList.toggle("animate");
  if (audio.paused) {
    audio.play();

    document.querySelector(".pl").classList.toggle("hiden");
    document.querySelector(".pas").classList.remove("hiden");
  } else {
    audio.pause();
    document.querySelector(".pas").classList.toggle("hiden");
    document.querySelector(".pl").classList.remove("hiden");
    clearInterval(setinter);
  }
});

let nx = document.getElementById("next");
nx.addEventListener("click", () => {
  date1 = 0;
  date2 = 0;
  index++;
  if (index > track.length - 1) {
    index = 0;
  }
  audio.src = track[index];
  imgs.src = ims[index];
  nameplay1.innerHTML = name1[index];
  nameplay2.innerHTML = name2[index];

  audio.play();
});

let bak = document.getElementById("back");
bak.addEventListener("click", () => {
  date1 = 0;
  date2 = 0;
  index--;
  if (index < 0) {
    index = 0;
  }

  audio.src = track[index];
  imgs.src = ims[index];
  nameplay1.innerHTML = name1[index];
  nameplay2.innerHTML = name2[index];
  audio.play();
});

document.onkeyup = (e) => {
  switch (e.key) {
    case "Enter":
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      break;

    case "c":
      if (audio.muted) {
        audio.muted = false;
      } else {
        audio.muted = true;
      }
      break;
  }
};