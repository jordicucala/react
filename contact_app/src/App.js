import React, { Component } from 'react';
import ContactsList from './ContactsList';

let contacts = {
  name: 'Scott',
  phone: '555 555 555'
}


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
