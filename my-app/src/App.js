import React, { useState } from 'react'
import './App.css';
import Header from './componets/Header'
import AddContact from './componets/AddContact'
import ContactList from './componets/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact)=> {
    console.log(contact)
    setContacts([...contacts,contact])
  }
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
