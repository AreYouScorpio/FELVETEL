class Greeter {
    fullName: string = "";
    skills: Array<{name: string, point: number}> = [
        {name: "programming", point: 33}
    ]
    constructor(firstName: string, lastName: string) {
        this.fullName = `${lastName} ${firstName}`
    }

    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let g: Greeter = new Greeter(`Jozsef`, `Cserko`);
document.body.innerHTML = g.greet();