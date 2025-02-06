import React from 'react';
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactCard from './Contactcard.jsx'
import ContactList from './ContactList.jsx'


function App() {
  const contacts = [
    {
      id:"1",name: "Tanay",email: "tanay@gmail.com"
    },
    {
      id:"2",name: "Rachit",email: "Rachit@gmail.com"
    }
  ]
  return (
    <>
      <Header/>
      <AddContact/>
      <ContactList contacts= {contacts}/>
    </>
  )
}

export default App;
