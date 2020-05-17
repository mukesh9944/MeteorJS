import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(() => {

  // class Person {
  //
  //   constructor(name = 'default', age = 0){
  //     this.name = name;
  //     this.age = age;
  //   }
  //
  //   getGreeting() {
  //     return `Hi! I am ${this.name}.`;
  //   }
  //
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly'){
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //
  //   getGreeting() {
  //     if(this.preferredLanguage){
  //       return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  // let me = new Programmer('Mukesh', 40);
  // console.log(me.getGreeting());
  //
  // let person = new Programmer('Tarun', 40, 'Java');
  // console.log(person.getGreeting());

});

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
//
// let yearBuilt = 1995;
//
// let houseDescription = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// }
//
// console.log(houseDescription);
