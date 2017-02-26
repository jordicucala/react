import React, { Component } from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: '555 555 555'
}, {
  id: 2,
  name: 'Jordi',
  phone: '555 111 555'
}, {
  id: 3,
  name: 'Nuria',
  phone: '555 555 222'
}]




class App extends Component {
  render() {
    return (
      <div>
        <h1>Contacts Lists</h1>
        <ContactsList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
