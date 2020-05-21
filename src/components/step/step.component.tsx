import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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
  }),
);

export default function Step(props: any) {
  const [on, setOn] = useState(props.isOn);
  const classes = useStyles();

  return (
    <Paper
      square={true}
      className={on ? classes.on : classes.off}
      onClick={() => setOn(!on)}
    />
  ); 
}