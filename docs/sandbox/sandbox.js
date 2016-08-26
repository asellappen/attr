import Attr from 'attr';
import debug from 'debug';
// Add debug to window
window.myDebug = debug;
// Enable debug for this script only
debug.enable("attr:main")


const Test = function (obj) {
    var self = this;
    for (var o in obj) {
        if (obj.hasOwnProperty(o)) {
            const item = obj[o];
            self[o] = item;
        }
    }
}

Test.prototype.attr = Attr;
window.TestClass = Test;

const testObj = {
    firstName: 'Juan',
    lastName: 'Orozco',
    middleInitial: '',
    get fullName () {
        return `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    },
    set middleName (val) {
        this.middleInitial = 'poop';
    }
};

window.testObj = new Test(testObj);
