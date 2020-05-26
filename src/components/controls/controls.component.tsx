import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import Box from '@material-ui/core/Box';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Instrument } from '../../enums/instrument.enum';
import { IChannel } from '../../interfaces/channel.interface';

interface IControlProp {
  channel$: BehaviorSubject<IChannel>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '5px !important',
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
  }),
);

export default function Controls({ channel$ }: IControlProp) {
  const [isOn, setOn] = useState(false);
  const [instrument, setInstrument] = useState('');

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInstrument(event.target.value as string);
    updateInstrument(event.target.value as Instrument)

  };

  const updateInstrument = (newInstrument: Instrument) => {
    channel$.next({
      ...channel$.value,
      instrument: newInstrument, 
    });
  };

  return (
    <Box
      className={classes.root}  
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      border={1}
      height='42px'
      width='210px'
    >
      <FormControl className={classes.formControl}>
        <Select
          displayEmpty
          id='instrument-select'
          value={instrument}
          onChange={handleChange}
        >
          <MenuItem value='' disabled><em>Instrument</em></MenuItem>
          {Object.entries(Instrument).map(([value, instrument], key) => <MenuItem key={key} value={value}>{instrument}</MenuItem>)}
        </Select>
      </FormControl>
      { isOn ? <PlayCircleFilledIcon style={{ cursor: 'pointer', margin: '4px' }} onClick={() => setOn(!isOn)} /> : <PlayCircleOutlineIcon style={{ cursor: 'pointer', margin: '4px' }} onClick={() => setOn(!isOn)} /> }
    </Box>
  );
}