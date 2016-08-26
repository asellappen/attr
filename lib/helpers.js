import debug from 'debug';

const log = debug('attr:helpers');

// TODO: This seems to be the consensus for stringifying simple types but it
// should be a little more robust than this, just in case.
export const toString = function (obj) {
    log('toString', obj);
    return String(obj);
};

export const set = function (ctx, key, value) {
    log('set', ctx, key, value);
    ctx[toString(key)] = value;
    return value;
};

export const get = function (ctx, key) {
    log('get', ctx, key);
    return ctx[toString(key)];
};

const setManyCallback = function (value, key, map) {
    log('setManyCallback',value, key, map);
    if (typeof value === 'object') {
        if (map[key]) {
            setMany(map[key], value);
        } else {
            set(map, key, value);
        }
    } else {
        set(map, key, value);
    }
};

export const setMany = function (ctx, obj) {
    log('setMany', ctx, obj);

    // if object knows how to iterate over itself, use that
    if (ctx.forEach) {
        ctx.forEach(setManyCallback);
    } else {
        for (const key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
                setManyCallback(obj[key], key, ctx);
            }
        }
    }


    return ctx;
};
