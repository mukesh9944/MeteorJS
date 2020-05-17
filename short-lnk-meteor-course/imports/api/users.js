import { Meteor } from 'meteor/meteor';
import SimpleScheme from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;
  console.log('this is the user', user);
  
  new SimpleScheme({
    email: {
      type: String,
      regEx: SimpleScheme.RegEx.Email
    }
  }).validate({email});

  return true;
});
