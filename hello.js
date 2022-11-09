var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.fullName = "";
        this.fullName = "".concat(lastName, " ").concat(firstName);
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is ".concat(this.fullName, ".");
    };
    return Greeter;
}());
var g = new Greeter("Jozsef", "Cserko");
document.body.innerHTML = g.greet();
