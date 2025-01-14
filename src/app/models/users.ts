export class User {
    id?: number; // Optionnel, car le backend peut générer cet ID
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  
    constructor(firstName: string, lastName: string, email: string, password: string, id?: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
  }
  