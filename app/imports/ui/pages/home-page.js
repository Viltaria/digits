import { Template } from 'meteor/templating';

Template.Home_Page.onCreated(function() {
  this.subscribe('Contacts');
})
