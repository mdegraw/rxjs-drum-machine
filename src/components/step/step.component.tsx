import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface IStepProp {
  step: number;
  isCurrentStep: boolean;
  isOn: boolean;
  updateSteps: (step: number, isOn: boolean) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    off: {
      height: 30,
      width: 20,
      backgroundColor: '#90a4ae',
      cursor: 'pointer',
    },
    on: {
      height: 30,
      width: 20,
      backgroundColor: '#63d8ce',
      cursor: 'pointer',
    },
    highlight: {
      height: 30,
      width: 20,
      backgroundColor: '#8FEEF3',
      cursor: 'pointer',
    },
  }),
);

export default function Step({ step, isOn, isCurrentStep, updateSteps }: IStepProp) {
  const [on, setOn] = useState(isOn);

  const classes = useStyles();

  return (
    <Paper
      square={true}
      className={isCurrentStep
        ? classes.highlight
        : on
        ? classes.on
        : classes.off}
      onClick={() => {
        setOn(!isOn);
        updateSteps(step, !isOn);
      }}
    />
  ); 
}