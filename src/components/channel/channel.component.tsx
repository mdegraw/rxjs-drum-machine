import React from 'react';
import { Observable } from 'rxjs';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Sequence from '../sequence/sequence.component';
import Controls from '../controls/controls.component';

interface IChannelProps {
  clock$: Observable<number>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px !important',
    },
  }),
);

export default function Channel({ clock$ }: IChannelProps) {
  const classes = useStyles();

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
      <Controls clock$={clock$} />
      <Sequence clock$={clock$} />
    </Box>
  );
}