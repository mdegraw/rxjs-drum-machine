import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface IStepProp {
  step: number;
  isCurrentStep: boolean;
  isOn: boolean;
  updateSteps: (step: number, isOn: boolean) => void;
}
const baseStyle = {
  height: 30,
  width: 20,
  backgroundColor: '#90a4ae',
  cursor: 'pointer',
};

const useStyles = makeStyles(() =>
  createStyles({
    off: baseStyle,
    on: {
      ...baseStyle,
      backgroundColor: '#63d8ce',
    },
    highlight: {
      ...baseStyle,
      backgroundColor: '#8FEEF3',
    },
    highlightOn:{
      ...baseStyle,
      backgroundColor: '#c4fcff',
    }
  }),
);

export default function Step({ step, isOn, isCurrentStep, updateSteps }: IStepProp) {
  const [on, setOn] = useState(isOn);

  const classes = useStyles();

  return (
    <Paper
      square={true}
      className={isCurrentStep && on
        ? classes.highlightOn
        : isCurrentStep
        ? classes.highlight
        : on
        ? classes.on
        : classes.off}
      onClick={() => {
        setOn(!on);
        updateSteps(step, !on);
      }}
    />
  ); 
}