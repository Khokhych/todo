import React from 'react';
// import './sass/app.sass';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Todo from './components/Todo/Todo';

export default () => {
  const dispatch = useDispatch();
  function getData() {
    dispatch({ type: 'TODO_DATA', payload: JSON.parse(localStorage.getItem('toro')) });
  }
  getData();
  return (
    <Container maxWidth="sm">
      <Todo />
    </Container>
  );
};
