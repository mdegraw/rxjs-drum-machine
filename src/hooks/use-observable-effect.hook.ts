import { useEffect } from 'react';
import { Observable } from 'rxjs';

/* eslint-disable react-hooks/exhaustive-deps */
export function useObservableEffect<T>(observable$: Observable<T>, subscriptionCb?: (...args: any[]) => void, cb?: (...args: any[]) => void) {
  useEffect(() => {
    const subscription = observable$.subscribe(subscriptionCb);

    if (cb && typeof cb === 'function') {
      cb();
    }

    return () => subscription.unsubscribe();
  }, []);
}