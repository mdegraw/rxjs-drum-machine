import { Howl } from 'howler';

const baseUrl = process.env.NODE_ENV === 'production' ? '/rxjs-drum-machine/sounds' : '/sounds';

const snare = new Howl({ src: [`${baseUrl}/snare.mp3`] });
const kick = new Howl({ src: [`${baseUrl}/kick.mp3`] });
const hihat = new Howl({ src: [`${baseUrl}/hihat.mp3`] });
const maracas = new Howl({ src: [`${baseUrl}/maracas.mp3`] });
const clave = new Howl({ src: [`${baseUrl}/clave.mp3`] });
const rimshot = new Howl({ src: [`${baseUrl}/rimshot.mp3`] });
const toms = new Howl({ src: [`${baseUrl}/toms.mp3`] });
const clap = new Howl({ src: [`${baseUrl}/clap.mp3`] });
const conga = new Howl({ src: [`${baseUrl}/conga.mp3`] });
const cowbell = new Howl({ src: [`${baseUrl}/cowbell.mp3`] });

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
