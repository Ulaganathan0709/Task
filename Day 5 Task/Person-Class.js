class Person {
    constructor(name,age,gender,emailID,phoneNumber,address)
    {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.emailID = emailID;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    // method to set name
    setName(name) {
      this.name = name;
    }
  
    // method to set age
    setAge(age) {
      this.age = age;
    }
  
    // method to set gender
    setGender(gender) {
      this.gender = gender;
    }
  
    // method to set emailID
    setEmailID(emailID) {
      this.emailID = emailID;
    }
  
    // method to set phoneNumber
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
  
    // method to set adress
    setAdress(address) {
      this.adress = address;
    }
    /**
 * Returns a string representation of the Person object.
 * @return {string} A string representation of the Person object.
 */
    toString() {
      return `Name: ${this.name} Age: ${this.age}, Gender: ${this.gender} EMailID: ${this.emailID} Phone Number: ${this.phoneNumber} Address: ${this.address}`;
    }
  }
/**
 * Loops through an array of Person objects and prints each object's toString() representation to the console.
 * @param {Person[]} members - An array of Person objects.
 */
function printMembers(members) {
    members.forEach(function(member) {
      console.log(member.toString());
    });
  }
  
  // Creating a list to hold all person instances
  let members = [];
  // Adding a persons details
  let person = new Person('Ulaga', 27, 'Male', 'ulaga123@example.com', '1234567890', '123 Main St, trichy');
  members.push(person);
  let person2 = new Person('Nathan',28, 'Male', 'nathan222@example.com','2123455670','99/dmain flaths,saba st,madurai');
  members.push(person2);
  let person3 = new Person ('sivakami', 'Female','sivakami123@eample.com','1234567880','123 kuruku st, saidapet,chennai');
  members.push(person3);
  
  printMembers(members);