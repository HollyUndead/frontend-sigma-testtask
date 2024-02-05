export class User {
  constructor(firstname, lastname, age, phonenumber, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.phonenumber = phonenumber;
    if (id !== undefined) {
      this.id = id;
    }
  }
}
