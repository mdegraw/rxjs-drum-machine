import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Sequence from '../sequence/sequence.component';
import Controls from '../controls/controls.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px !important',
    },
  }),
);
export default function Channel() {
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
      <Controls />
      <Sequence />
    </Box>
  );
}