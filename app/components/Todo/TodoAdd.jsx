import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  TextField, IconButton, Paper, Grid, Box,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default () => {
  const textField = useRef();
  const dispatch = useDispatch();
  const [errorTextField, setErrorTextField] = useState(false);

  const add = () => {
    const { value } = textField.current.querySelector('input');

    if (!value) {
      setErrorTextField(true);
      return;
    }

    setErrorTextField(false);
    dispatch({ type: 'TODO_ADD', payload: value });
    textField.current.querySelector('input').value = '';
  };

  return (
    <Box mb={2}>
      <Paper>
        <Grid
          container
          wrap="nowrap"
        >
          <Grid item xs zeroMinWidth alignItems="center" container>
            <Box width="100%" pl={6}>
              <TextField
                fullWidth
                ref={textField}
                error={errorTextField}
                placeholder="What needs to be done?"
              />
            </Box>
          </Grid>

          <Grid item>
            <IconButton aria-label="add" onClick={add}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};