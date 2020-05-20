import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Channel from '../channel/channel.component';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px !important',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function Board() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display='flex'
      flexDirection='column'
      border={1}
      width='860px'
    >
      {[...Array(4)].map((_, i) => <Channel key={i} />)}
      <Box
        className={classes.root}
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
      >
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          startIcon={<PauseIcon />}
        >
          Pause
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          startIcon={<PlayArrowIcon />}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
}