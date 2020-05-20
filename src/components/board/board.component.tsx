import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Channel from '../channel/channel.component';
import Button from '@material-ui/core/Button';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AddIcon from '@material-ui/icons/Add';

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

const DEFAULT_CHANNELS = [...Array(4)].map((_, i) => <Channel key={i} />);

export default function Board() {
  const [channels, setChannels] = useState(DEFAULT_CHANNELS)
  const classes = useStyles();

  const addChannel = () => setChannels([...channels, (<Channel key={channels.length + 1} />)]);

  return (
    <Box
      className={classes.root}
      display='flex'
      flexDirection='column'
      border={1}
      width='860px'
    >
      {channels}
      <Box
        className={classes.root}
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
      >
        <Box marginRight='auto'>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={addChannel}
          >
            Channel
          </Button>
        </Box>
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