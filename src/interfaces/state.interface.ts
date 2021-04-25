export interface IState {
  bpm: number;
  step: number;
  pauseStep: number;
  play: boolean;
}

export const INITIAL_STATE: IState = {
  play: false,
  step: 0,
  pauseStep: 0,
  bpm: 130,
};
