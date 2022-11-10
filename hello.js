var Greeter = /** @class */ (function () {
    function Greeter(nameObj, skill) {
        if (skill === void 0) { skill = "programming"; }
        this.fullName = "";
        this.skills = [
            { name: "programming", point: 33 }
        ];
        this.fullName = "".concat(nameObj.lastName, " ").concat(nameObj.firstName);
        this.skill = skill;
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is ".concat(this.fullName, ".");
    };
    return Greeter;
}());
// let g: Greeter = new Greeter(`Jozsef`, `Cserko`); az idezojel is egyenes xD
var g = new Greeter({ firstName: 'Jozsef', lastName: 'Cserko' }, "dancing");
document.body.innerHTML = g.greet();
