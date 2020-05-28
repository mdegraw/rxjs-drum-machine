import React from 'react';
import { Observable, BehaviorSubject } from 'rxjs';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Sequence from '../sequence/sequence.component';
import Controls from '../controls/controls.component';
import { IState } from '../../interfaces/state.interface';
import { getInitialChannel, IChannel } from '../../interfaces/channel.interface';

interface IChannelProps {
  id: number;
  clock$: Observable<IState>;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '10px !important',
    },
  }),
);

export default function Channel({ id, clock$ }: IChannelProps) {
  const classes = useStyles();
  const channel$ = new BehaviorSubject<IChannel>(getInitialChannel(id));

  return (
    <Box
      className={classes.root}
      display='flex'
      flexDirection='row'
      border={1}
      justifyContent='space-between'
      width='840px'
      marginBottom='5px'
    >
      <Controls channel$={channel$} />
      <Sequence clock$={clock$} channel$={channel$} />
    </Box>
  );
}