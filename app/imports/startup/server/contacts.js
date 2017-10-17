import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsList = [
  {
    first: 'Hello',
    last: 'Kitty',
    address: '1234 Abc Street',
    telephone: '8081111111',
    email: 'hello@bye.com',
  },
  {
    first: 'Hi',
    last: 'Kitty',
    address: '1234 Def Street',
    telephone: '8082222222',
    email: 'hi@bye.com',
  }
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsList, function (contact) {
    Contacts.insert(contact);
  });
}
