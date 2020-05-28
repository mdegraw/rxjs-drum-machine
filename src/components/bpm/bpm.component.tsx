import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface IBpmControlProp {
  bpm$: BehaviorSubject<{ bpm: number }>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bpmBox: {
      padding: '3px !important',
    },
  }),
);


export default function BpmControl({ bpm$ }: IBpmControlProp) {
  const getBpm = () => bpm$.value.bpm;
  const nextBpm = (val: number) => {
    setBpm(val);
    bpm$.next({ bpm: val })
  };
  const [bpm, setBpm] = useState(getBpm());

  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='row'>
      <RemoveIcon style={{ cursor: 'pointer', margin: '4px' }} onClick={() => nextBpm(getBpm() > 1 ? getBpm() - 1 : 0)} />
      <Box border={1}>
        <Typography className={classes.bpmBox} color='secondary' variant='h6'>{bpm}</Typography>
      </Box>
      <AddIcon style={{ cursor: 'pointer', margin: '4px' }} onClick={() => nextBpm(getBpm() + 1)}/>
    </Box>
  );
}