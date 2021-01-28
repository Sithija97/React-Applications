import React from 'react'

const ContactList = (props) => {
    //function to get contacts
    const getContactList = props.contacts.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
    })
    return (
        <div className='ui celled list'>{getContactList}</div>
    )
}

export default ContactList;