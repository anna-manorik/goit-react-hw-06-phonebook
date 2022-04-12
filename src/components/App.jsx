import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';
import store from '../redux/phonebook-reduser';
import * as actions from '../redux/phonebook-action';
import { connect } from 'react-redux';

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('contacts')) {
  //     const currentContactList = JSON.parse(localStorage.getItem('contacts'));
  //     setContacts(currentContactList);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
