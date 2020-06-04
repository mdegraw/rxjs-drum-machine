import React from 'react';
import ReactDOM from 'react-dom';
import Step from './step.component';
import { noop } from '../../utils/noop.util';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Step step={0} isOn={true} isCurrentStep={true} updateSteps={noop} />, div);
});