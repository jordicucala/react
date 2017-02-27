import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,10)});
  }
  addContact(event) {
      event.preventDefault();
      let name = this.refs.name.value;
      let phone = this.refs.phone.value;
      let id = Math.floor((Math.random() * 100) + 1)
      this.setState({
        contacts: this.state.contacts.concat({id, name, phone})
      })
  }

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
        <div>
        <ul>
          {filteredContacts.map((contact) => {
            return <Contact contact={contact} key={contact.id}/>
          })}
        </ul>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <form onSubmit={this.addContact.bind(this)}>
          <input type="text" ref="name" />
          <input type="text" ref="phone" />
          <button type="submit">Add New Contactt</button>
        </form>
        </div>
    )
  }
}

export default ContactsList;
