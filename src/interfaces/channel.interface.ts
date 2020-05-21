import { Instrument } from "../enums/instrument.enum";

export interface IChannel {
  instrument: Instrument;
  volume: number;
  steps: number[];
}
