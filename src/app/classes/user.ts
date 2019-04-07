export class User {
    firstName: string;
    lastName: string;
    photoURl: string;

    constructor({firstName, lastName, photoURl}){   // ES6 magic constructor. "destructoring"
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoURl = photoURl;
    }
}
