import React from 'react';
import ReactDOM from 'react-dom';
import { of, BehaviorSubject } from 'rxjs';

import Sequence from './sequence.component';
import { IChannel } from '../../interfaces/channel.interface';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sequence clock$={of()}  channel$={new BehaviorSubject({} as IChannel)} />, div);
});