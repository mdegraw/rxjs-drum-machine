import {
  playHiHat,
  playKick,
  playSnare,
  playToms,
  playMaracas,
  playClave,
  playCowbell,
  playRimshot,
  playConga,
  playClap,
} from './../utils/sounds.util';

export enum Instrument {
  Kick = 'Kick',
  Snare = 'Snare',
  Toms = 'Toms',
  Rimshot = 'Rimshot',
  Maracas = 'Maracas',
  Conga = 'Conga',
  Clave = 'Clave',
  HiHat = 'HiHat',
  Clap = 'Clap',
  Cowbell = 'Cowbell',
}

export const InstrumentConfig = {
  [Instrument.HiHat]: {
    trigger: playHiHat,
  },
  [Instrument.Kick]: {
    trigger: playKick,
  },
  [Instrument.Snare]: {
    trigger: playSnare,
  },
  [Instrument.Toms]: {
    trigger: playToms,
  },
  [Instrument.Maracas]: {
    trigger: playMaracas,
  },
  [Instrument.Clave]: {
    trigger: playClave,
  },
  [Instrument.Clap]: {
    trigger: playClap,
  },
  [Instrument.Cowbell]: {
    trigger: playCowbell,
  },
  [Instrument.Conga]: {
    trigger: playConga,
  },
  [Instrument.Rimshot]: {
    trigger: playRimshot,
  },
};