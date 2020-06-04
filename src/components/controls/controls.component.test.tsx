import React from 'react';
import ReactDOM from 'react-dom';
import { BehaviorSubject } from 'rxjs';

import Controls from './controls.component';
import { IChannel } from '../../interfaces/channel.interface';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controls channel$={new BehaviorSubject({} as IChannel)} />, div);
});