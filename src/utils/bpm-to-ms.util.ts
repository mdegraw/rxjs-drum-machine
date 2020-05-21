export const bpmToMs = (bpm: number) => bpm > 0 ? 60000 / bpm : Infinity;
