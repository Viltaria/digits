import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Contact
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
  },
  telephone: {
    label: 'Telephone',
    type: String,
    optional: false,
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
  },
});

Contacts.attachSchema(ContactsSchema);
