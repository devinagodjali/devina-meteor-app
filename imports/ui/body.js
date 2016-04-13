import { Template } from 'meteor/templating';
import { Data } from '../api/data.js';

import './body.html';

Template.body.helpers({
   Data() {
       return Data.find({}, {sort: { createdAt: -1 }});
   }
});

Template.body.events({
   "submit .form-data"(event) {
       
       event.preventDefault();
       
       const target  = event.target;
       const title   = target.title.value;
       const content = target.content.value;
       
       Data.insert({
           title,
           content,
           createdAt: new Date(),
       });
       
       target.title.value = '';
       target.content.value = '';
   }, 
    
});

Template.post_data.events({
    'click #btn-delete'() {
        Data.remove(this._id);
    },
});