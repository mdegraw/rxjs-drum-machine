import { BehaviorSubject, merge } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { clockPipeline } from './clock.util';

describe('clockPipeline', () => {
  it('should not emit when play is false', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      // assert the two objects are equal
      expect(actual).toEqual(expected);
    });
    scheduler.run(helpers => {
      const { expectObservable } = helpers;

      const play$ = new BehaviorSubject({ play: false });
      const boardEvents$ = merge(play$);
      const clock$ = clockPipeline(boardEvents$);
      const expected = '-';

      expectObservable(clock$).toBe(expected);
    });
  });

  it('should emit state if play is `true`', async (done) => {
    const boardEvents$ = new BehaviorSubject({ play: true });
    const state = {
      step: 0,
      pauseStep: 0,
      bpm: 130,
      play: true,
    }
    const clockPipeline$ = clockPipeline(boardEvents$);

    clockPipeline$.subscribe((stepState) => {
      expect(stepState).toEqual(state);
      done();
    });
  });

  it('should emit state if play is `true` and bpm exists', async (done) => {
    const bpm$ = new BehaviorSubject({ bpm: 100 });
    const play$ = new BehaviorSubject({ play: true });
    const boardEvents$ = merge(bpm$, play$);

    const state = {
      step: 0,
      pauseStep: 0,
      bpm: 160,
      play: true,
    };

    const clockPipeline$ = clockPipeline(boardEvents$);

    bpm$.next({ bpm: 160 });

    clockPipeline$.subscribe((stepState) => {
      expect(stepState).toEqual(state);
      done();
    });
  });
});

