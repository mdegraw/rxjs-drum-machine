import { interval } from 'rxjs';
import { take, repeat } from 'rxjs/operators';
import { bpmToMs } from './bpm-to-ms.util';

export const clock = () => interval(bpmToMs(100)).pipe(
  take(16),
  repeat(),
);