import React from 'react';
import PropTypes from 'prop-types';
import {List, Button} from './ContactList.styled'

const ContactList = ({ contacts, onDeleteContacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <Button
          onClick={() => {
            onDeleteContacts(id);
          }}
        >
          Delete
        </Button>
      </li>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};
