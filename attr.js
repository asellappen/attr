import {set, get, setMany} from './lib/helpers.js';

const attr = function (opts) {
    opts = opts || {};

    return function () {
        // determine mode
        let items;
        let key;
        let value;
        const self = opts.root || this;

        // No arguments means entire object is desired
        if (arguments.length === 0) {
            return self.serialize ? self.serialize() : self;
        }

        // One argument is a getter, unless type is an object, then setting multiple props
        if (arguments.length === 1) {
            key = arguments[0];
            if (typeof key === 'object') {
                items = arguments[0];
                setMany(self, items);
                return self;
            } else {
                return get(self, key);
            }
        }

        // Two arguments, or more, means setter... but we ignore everything past
        // second argument.
        if (arguments.length > 1) {
            key = arguments[0];
            value = arguments[1];

            set(self, key, value);

            return value;
        }
    };
};

export default attr;
