interface name {
    firstName: string;
    lastName: string;
    [propname: string] : string;
}

class Greeter {
    fullName: string = "";
    skills: Array<{name: string, point: number}> = [
        {name: "programming", point: 33}
    ]
    // constructor(firstName: string, lastName: string) {
    //     this.fullName = `${lastName} ${firstName}`
    // }


    // readonly skill : string;
    // constructor(nameObj: name, skill: string = "programming") {
    //     this.fullName = `${nameObj.lastName} ${nameObj.firstName}`;
    //     this.skill = skill;
    // }

    readonly skill : string;
    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.lastName} ${nameObj.firstName}`;
        this.skill = skill;
    }


    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

// let g: Greeter = new Greeter(`Jozsef`, `Cserko`); az idezojel is egyenes xD
// let g: Greeter = new Greeter({firstName: 'Jozsef', lastName:'Cserko'}, "dancing");
// document.body.innerHTML = g.greet();

//nameParam erteke a name interface alapjan, kiemeljuk:
let nameParam: name = {firstName: 'Jozsef', lastName:'Cserko', age:"22"};
let g: Greeter = new Greeter(nameParam, "dancing");
document.body.innerHTML = g.greet();