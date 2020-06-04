import { bpmToMs } from './bpm-to-ms.util';

describe('bpmToMs', () => {
  it('should return `Infinity` if bpm is <= 0', () => {
    const ms = bpmToMs(0);
    expect(ms).toEqual(Infinity);
  });

  it('should return correct ms', () => {
    const ms = bpmToMs(60000);
    expect(ms).toEqual(1);
  });
})