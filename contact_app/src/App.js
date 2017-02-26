import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Contacts Lists</h1>
        <ContactsList />
      </div>
    );
  }
}

export default App;
