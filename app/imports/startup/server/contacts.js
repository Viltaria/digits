import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Tyler', last: 'Chong', address: '123 Sesame Street', telephone: '808-388-0313', email: 'johnson@hawaii.edu' },
  { first: 'Danny', last: 'Weng', address: '123 Sesame Street', telephone: '808-388-0313', email: 'johnson@hawaii.edu' },
  { first: 'Neel', last: 'Kotak', address: '123 Sesame Street', telephone: '808-388-0313', email: 'johnson@hawaii.edu' },
  { first: 'Potato', last: 'Man', address: '123 Sesame Street', telephone: '808-388-0313', email: 'johnson@hawaii.edu' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function contactStuffs(stuff) {
    Contacts.insert(stuff);
  });
}
