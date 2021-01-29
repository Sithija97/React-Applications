import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    //function to get contacts
    const getContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}/>
        )
    })
    return (
        <div className='ui celled list'>{getContactList}</div>
    )
}

export default ContactList;