import React, { useState, useEffect } from 'react';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { range } from '../../utils/range.util';
import Step from '../step/step.component';
import { IChannel } from '../../interfaces/channel.interface';
import { IState } from '../../interfaces/state.interface';
import { InstrumentConfig } from '../../enums/instrument.enum';

interface ISequenceProps {
  clock$: Observable<IState>;
  channel$: BehaviorSubject<IChannel>;
}

const STEPS = 16;
const DEFAULT_STEPS = range(1, STEPS).map(() => false);

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '5px !important',
    },
  }),
);

export default function Sequence({ clock$, channel$ }: ISequenceProps) {
  const [steps, setSteps] = useState([...DEFAULT_STEPS]);
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const classes = useStyles();

  const updateSteps = (step: number, isOn: boolean) => { 
    const tempSteps  = steps;
    tempSteps[step] = isOn;
    channel$.next({
      ...channel$.value,
      steps: tempSteps,
    });
  };

  useEffect(() => {
    const subscription = combineLatest([clock$, channel$])
      .pipe(
        filter(([{ play }]: [IState, IChannel]) => play),
      )
      .subscribe(([{ step }, { steps, instrument}]: [IState, IChannel]) => {
        setSteps(steps);
        setCurrentStep(step);

        if (instrument && steps[step]) {
          // console.log('\n----PLAY----\n')
          InstrumentConfig[instrument]?.trigger();
        }
      }
      );
    return () => subscription.unsubscribe();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <Box className={classes.root} border={1} width='590px'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container direction='row' justify='center' spacing={2}>
              {steps.map((step, i) => (
                <Grid key={i} item>
                    <Step
                      step={i}
                      isOn={!!step}
                      isCurrentStep={i === currentStep}
                      updateSteps={updateSteps}
                    />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
