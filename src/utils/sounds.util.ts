const snare = new Audio('/sounds/snare.mp3');
const kick = new Audio('/sounds/kick.mp3');
const hihat = new Audio('/sounds/hihat.mp3');
const maracas = new Audio('/sounds/maracas.mp3');
const clave = new Audio('/sounds/clave.mp3');
const rimshot = new Audio('/sounds/rimshot.mp3');
const toms = new Audio('/sounds/toms.mp3');
const clap = new Audio('/sounds/clap.mp3');
const conga = new Audio('/sounds/conga.mp3');
const cowbell = new Audio('/sounds/cowbell.mp3');

export const playKick = () => {
  kick.play();
}

export const playHiHat = () => {
  hihat.play();
};

export const playSnare = () => {
  snare.play();
};

export const playMaracas = () => {
  maracas.play();
};

export const playRimshot = () => {
  rimshot.play();
};

export const playClave = () => {
  clave.play();
};

export const playClap = () => {
  clap.play();
};

export const playCowbell = () => {
  cowbell.play();
};

export const playToms = () => {
  toms.play();
};

export const playConga = () => {
  conga.play();
};
