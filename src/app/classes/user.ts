export class User {
    firstName: string;
    lastName: string;
    photoURl: string;

    //working

    constructor({firstName, lastName, photoURl}){   // ES6 magic constructor. "destructoring"
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoURl = photoURl;
    }
}
