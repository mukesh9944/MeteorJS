import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleScheme from 'simpl-schema';
import shortid from 'shortid';


export const Links = new Mongo.Collection('links');

if(Meteor.isServer){
  Meteor.publish('links', function()  {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  'Links.insert'(url){
    if(!this.userId) {
      throw new Meteor.Error('Not-authorized')
    }

    new SimpleScheme({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleScheme.RegEx.Url
      }
    }).validate({url});

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    });
  },
  'links.setVisibility'(_id, visible) {
    if(!this.userId) {
      throw new Meteor.Error('Not-authorized')
    }

    new SimpleScheme({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({_id, visible});

    Links.update({_id, userId: this.userId}, {$set: {visible}});
  },
  'links.tractVisit'(_id){
    new SimpleScheme({
      _id: {
        type: String,
        min: 1
      }
    }).validate({_id});

    Links.update({_id}, {
      $set: {
        lastVisitedAt: new Date().getTime()
      },
      $inc: {
        visitedCount: 1
      }
    })
  }
});
