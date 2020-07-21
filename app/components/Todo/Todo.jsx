import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Grid } from '@material-ui/core';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';

export default () => {
  const todo = useSelector((state) => state.todo);
  return (
    <Box mt={3} mb={3}>

      <Box mb={3}>
        <Typography variant="h4">Your to do list</Typography>
      </Box>

      <TodoAdd />

      <Grid
        direction="column-reverse"
        container
        wrap="wrap"
      >
        {todo ? todo.map((item, i) => (
          <TodoItem text={item.text} date={item.dateСreation} i={i} key={item.dateСreation} />
        )) : ''}
      </Grid>

    </Box>
  );
};