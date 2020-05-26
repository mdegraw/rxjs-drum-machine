import { Instrument } from "../enums/instrument.enum";

export interface IChannel {
  id: number;
  instrument: Instrument | null;
  play: boolean;
  volume: number;
  steps: boolean[];
}

export const getInitialChannel = (id: number) => ({
  id,
  instrument: null,
  play: true,
  volume: 100,
  steps: [
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
  ],
});