import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';
import store from '../redux/phonebook-reduser';
import * as actions from '../redux/phonebook-action';
import { connect } from 'react-redux';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <NameList />
    </>
  );
}

const mapStatetoProps = state => ({});

export default connect(mapStatetoProps, null)(App);
