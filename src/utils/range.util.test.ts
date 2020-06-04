import { range } from './range.util';

describe('range', () => {
  it('should return a range of integers (multiple)', () => {
    expect(range(0,1)).toEqual([0,1]);
  });

  it('should return a range of integers (single)', () => {
    expect(range(0,0)).toEqual([0]);
  });
});