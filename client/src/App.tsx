import {Container} from '@material-ui/core';
import React from 'react';
import AccountBalance from './components/AccountBalance';
import Title from './components/Title';
import TransactionList from './components/TransactionList';

const App = (): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <Title/>
      <AccountBalance/>
      <TransactionList/>
    </Container>
  );
}

export default App;
