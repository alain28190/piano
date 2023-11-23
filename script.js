const notes = document.querySelectorAll(".note");
const volume = document.querySelector("volume input");

let allAudios = [],
  audio = new Audio("/audio/a.wav");

const pianoPlay = (note) => {
  audio.src = "./audio/$(note).wav";
  audio.play();


const clickKey = document.querySelector('[data-key="${notes}"]');

clickKey.classList.add('active');
setTimeout(() => {
  clickKey.classList.remove('active');
}, 150);
}

notes.forEach((note) => {
  allAudios.push(notes.dataset.key);

  note.addEventListerner('click', () => pianoPlay(notes.dataset.key));
});

const presskey = (e) => {
  pianoPlay(e.key);
};
document.addEventListener('keydown', presskey);


function slideVolume(e){
    audio.volume = e.target.value;
}

volume.addEventListener('input',slideVolume);
