import { interval, Observable, NEVER } from 'rxjs';
import { startWith, scan, switchMap, map, publish } from 'rxjs/operators';
import { bpmToMs } from './bpm-to-ms.util';
import { IState, INITIAL_STATE } from '../interfaces/state.interface';

export const clockPipeline = (boardEvents$: Observable<any>) => boardEvents$.pipe(
  startWith(INITIAL_STATE),
  scan((state: IState, curr: IState): IState => ({
      ...state,
      ...curr,
      pauseStep: state.step, // restart after pause on last step
    }),
    {} as IState,
  ),
  switchMap((state: IState) => state.play
    ? interval(bpmToMs(state.bpm)).pipe(
        map((i) => {
          state.step = (i + state.pauseStep) % 16;

          return state;
        }),
    )
    : NEVER,
  ),
);

export const clock = (boardEvents$: Observable<any>) => clockPipeline(boardEvents$).pipe(publish()); 