
// TODO: This seems to be the consensus for stringifying simple types but it
// should be a little more robust than this, just in case.
export const toString = function (obj) {
    return String(obj);
};

export const set = function (ctx, key, value) {
    ctx[toString(key)] = value;
    return value;
};

export const get = function (ctx, key) {
    return ctx[toString(key)];
};

export const setMany = function (ctx, obj) {
    for (const key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            console.log(key, obj, obj[key]);
            const item = obj[key];
            if (typeof item === 'object') {
                if (ctx[key]) {
                    setMany(ctx[key], item);
                } else {
                    set(ctx, key, item);
                }
            } else {
                set(ctx, key, item);
            }
        }
    }

    return ctx;
};
