import uuidv4 from 'uuid/v4';

const Contact = function Contact(name, countryCode, phoneNumber) {
  this.uuid = uuidv4();
  this.name = name;
  this.countryCode = countryCode;
  this.phoneNumber = phoneNumber;
};

export default Contact;
