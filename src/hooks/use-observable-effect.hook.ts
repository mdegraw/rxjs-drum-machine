import { useEffect } from 'react';
import { Observable } from 'rxjs';

/* eslint-disable react-hooks/exhaustive-deps */
export function useObservableEffect<T>(observableS: Observable<T>, subscriptionCb?: (...args: any[]) => void, cb?: () => void) {
  useEffect(() => {
    const subscription = observableS.subscribe(subscriptionCb);
    // (clock$ as ConnectableObservable<IState>).connect();
    if (cb && typeof cb === 'function') {
      cb();
    }
    return () => subscription.unsubscribe();
  }, []);
}