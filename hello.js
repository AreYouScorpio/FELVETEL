var Greeter = /** @class */ (function () {
    // constructor(firstName: string, lastName: string) {
    //     this.fullName = `${lastName} ${firstName}`
    // }
    function Greeter(nameObj) {
        this.fullName = "";
        this.skills = [
            { name: "programming", point: 33 }
        ];
        this.fullName = "".concat(nameObj.lastName, " ").concat(nameObj.firstName);
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is ".concat(this.fullName, ".");
    };
    return Greeter;
}());
// let g: Greeter = new Greeter(`Jozsef`, `Cserko`);
var g = new Greeter({ firstName: 'Jozsef', lastName: 'Cserko' });
document.body.innerHTML = g.greet();
