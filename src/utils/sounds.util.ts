import { Howl } from 'howler';

const snare = new Howl({ src: ['/sounds/snare.mp3'] });
const kick = new Howl({ src: ['/sounds/kick.mp3'] });
const hihat = new Howl({ src: ['/sounds/hihat.mp3'] });
const maracas = new Howl({ src: ['/sounds/maracas.mp3'] });
const clave = new Howl({ src: ['/sounds/clave.mp3'] });
const rimshot = new Howl({ src: ['/sounds/rimshot.mp3'] });
const toms = new Howl({ src: ['/sounds/toms.mp3'] });
const clap = new Howl({ src: ['/sounds/clap.mp3'] });
const conga = new Howl({ src: ['/sounds/conga.mp3'] });
const cowbell = new Howl({ src: ['/sounds/cowbell.mp3'] });

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
