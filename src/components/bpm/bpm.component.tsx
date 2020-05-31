import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface IBpmControlProp {
  bpm$: BehaviorSubject<{ bpm: number }>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bpmBox: {
      padding: '3px !important',
    },
    slider: {
      width: '200px',
      'margin-top': '25px',
      'margin-right': '15px',
    },
  }),
);


export default function BpmControl({ bpm$ }: IBpmControlProp) {
  const [bpm, setBpm] = useState(bpm$.value.bpm);

  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='row'>
      <Slider
        min={10}
        max={200}
        className={classes.slider}
        value={bpm}
        onChange={(_: any, val: number | number[]) => { if (typeof val === 'number') setBpm(val)}}
        onChangeCommitted={(_: any, val: number | number[]) => { if (typeof val === 'number') bpm$.next({ bpm: val })}}
      />
      <Box display='flex' flexDirection='column'>
        <Typography variant='caption'>bpm</Typography>
        <Box border={1}>
          <Typography className={classes.bpmBox} color='secondary' variant='h6'>{bpm}</Typography>
        </Box>
      </Box>
    </Box>
  );
}