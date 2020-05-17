import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';


import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    console.log(req.url);
    const _id = req.url.slice(1);
    const link = Links.findOne({_id});

    if(link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.tractVisit', _id);
    }else{
      next();
    }


  });

  WebApp.connectHandlers.use((req, res, next) => {
    console.log('THis is from my custom middleware');
    console.log(req.url, req.method, req.headers, req.query);
    // res.statusCode = 404;
    // res.setHeader('my-custom-header', 'Mukesh is here');
    // res.write('<h1>This is my middleware at work</h1>');
    // res.end();
    next();
  });

});



// code to run on server at startup
//
// const petSchema = new SimpleScheme({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//     optional: true
//   },
//   age: {
//     type: Number,
//     min: 0,
//  },
//  contactNumber: {
//    type: String,
//    optional: true,
//    regEx: SimpleScheme.RegEx.Phone
//  }
// });
//
// petSchema.validate({
//   name: 'aaa',
//   age: 21,
//   contactNumber: 'abc123'
// });

// const employeeScheme = new SimpleScheme({
//   name: {
//     type: String,
//     min: 1,
//     max: 200
//   },
//   hourlyWage: {
//     type: Number,
//     min: 1
//   },
//   email: {
//     type: String,
//     regEx: SimpleScheme.RegEx.Email
//   }
// });
//
// employeeScheme.validate({
//   name: 'mukesh',
//   hourlyWage: 12,
//   email: 'sdsd'
// });
