//C.WRITE A PERSON CLASS TO HOLD ALL DETAILS
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  const person1 = new Person('vignesh', 25, 'india');
  const person2 = new Person('preethi', 21, 'india');
  
  console.log('Person-1 Details:');
  person1.displayDetails();
  
  console.log('\nPerson-2 Details:');
  person2.displayDetails();

//OUTPUT:
/*
  Person-1 Details:
Name: vignesh
Age: 25
Country: india
Person-2 Details:
Name: preethi
Age: 21
Country: india
*/