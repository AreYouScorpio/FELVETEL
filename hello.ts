interface name {
    firstName: string;
    lastName?: string;
}

class Greeter {
    fullName: string = "";
    skills: Array<{name: string, point: number}> = [
        {name: "programming", point: 33}
    ]
    // constructor(firstName: string, lastName: string) {
    //     this.fullName = `${lastName} ${firstName}`
    // }
    constructor(nameObj: name) {
        this.fullName = `${nameObj.lastName} ${nameObj.firstName}`
    }

    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

// let g: Greeter = new Greeter(`Jozsef`, `Cserko`);
let g: Greeter = new Greeter({firstName: 'Jozsef', lastName:'Cserko'});
document.body.innerHTML = g.greet();