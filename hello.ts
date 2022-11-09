class Greeter {
    fullName: string = "";

    constructor(firstName: string, lastName: string) {
        this.fullName = `${lastName} ${firstName}`
    }

    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let g: Greeter = new Greeter(`Jozsef`, `Cserko`);
document.body.innerHTML = g.greet();