import React from 'react';
import ReactDOM from 'react-dom';
import { of } from 'rxjs';

import Channel from './channel.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Channel clock$={of()} id={0} />, div);
});