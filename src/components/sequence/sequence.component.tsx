import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { range } from '../../utils/range.util';
import Step from '../step/step.component';

const STEPS = 16;
const DEFAULT_STEPS = range(1, STEPS).map(() => false);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '5px !important',
    },
  }),
);

export default function Sequence() {
  const [steps] = useState(DEFAULT_STEPS);
  console.log('steps')
  console.log(steps)
  const classes = useStyles();

  return (
    <Box className={classes.root} border={1} width='590px'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container direction='row' justify='center' spacing={2}>
              {steps.map((isOn, i) => (
                <Grid key={i} item>
                  <Step className='step' isOn={isOn} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}