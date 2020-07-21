import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  TextField, IconButton, Paper, Grid, Box,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LoopIcon from '@material-ui/icons/Loop';

export default (props) => {
  const { text, date, i } = props;
  const textField = useRef();
  const dispatch = useDispatch();
  const [errorTextField, setErrorTextField] = useState(false);

  const update = () => {
    const { value } = textField.current.querySelector('input');

    if (!value) {
      setErrorTextField(true);
      return;
    }
    setErrorTextField(false);

    dispatch({ type: 'TODO_UPDATE', payload: { value, i } });
  };
  const remove = () => {
    dispatch({ type: 'TODO_REMOVE', payload: i });
  };

  const formatDate = (milliseconds) => {
    const d = new Date(milliseconds);
    const currMinutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    const currHours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    const currDate = d.getDate();
    const currMonth = d.getMonth() + 1;
    const currYear = d.getFullYear();
    return `${currYear}-${currMonth}-${currDate}  ${currHours}:${currMinutes}`;
  };

  return (

    <Box mb={1}>
      <Paper>
        <Grid
          container
          wrap="nowrap"
        >

          <Grid item>
            <IconButton aria-label="done" onClick={remove}>
              <HighlightOffIcon />
            </IconButton>
          </Grid>

          <Grid xs zeroMinWidth alignItems="center" container>
            <TextField
              fullWidth
              ref={textField}
              error={errorTextField}
              defaultValue={text}
              helperText={`Date creation ${formatDate(date)}`}
            />
          </Grid>

          <Grid item>
            <IconButton aria-label="done" onClick={update}>
              <LoopIcon />
            </IconButton>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};