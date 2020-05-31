import { useEffect } from 'react';
import { Observable } from 'rxjs';

/* eslint-disable react-hooks/exhaustive-deps */
export function useObservableEffect<T>(observableS: Observable<T>, subscriptionCb?: (...args: any[]) => void, cb?: (...args: any[]) => void) {
  useEffect(() => {
    const subscription = observableS.subscribe(subscriptionCb);

    if (cb && typeof cb === 'function') {
      cb();
    }

    return () => subscription.unsubscribe();
  }, []);
}