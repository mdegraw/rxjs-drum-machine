import React from 'react';
import ReactDOM from 'react-dom';
import { BehaviorSubject } from 'rxjs';

import BpmControl from './bpm.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BpmControl bpm$={new BehaviorSubject({ bpm: 100 })} />, div);
});