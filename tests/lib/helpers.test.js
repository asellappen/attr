/* jshint asi: false */
import 'chai';
import 'steal-mocha';
import {toString, set, get, setMany} from '../../lib/helpers';

const expect = chai.expect;
const testObjects = [
    {number: 100},
    {string: 'hello'},
    {boolean: false},
    {object: {name: 'juan'}}
];
const testMap = {};

for (var i = 0; i < testObjects.length; i++) {
    const item = testObjects[i];
    const key = Object.keys(item)[0];
    testMap[key] = item;
}

let resp;
let testObj = {};

describe('helpers', () => {
    beforeEach(() => {
        testObj = {};
        resp = undefined;
    });

    describe('toString function', () => {
        for (var i = 0; i < testObjects.length; i++) {
            const item = testObjects[i];
            const key = Object.keys(item)[0];

            it('returns a string type', () => {
                expect(typeof toString(item)).to.equal('string');
            });

            it(`converts ${key} to string`, () => {
                expect(toString(item)).to.equal(item.toString());
            });
        };
    });

    describe('when set function is called', () => {
        beforeEach(() => {
            resp = set(testObj, 'name', testObjects[3].name);
        });
        it('sets value', () => {
            expect(testObj.name).to.equal(testObjects[3].name);
        });

        it('returns value', () => {
            expect(resp).to.equal(testObjects[3].name);
        });
    });

    describe('setMany function', () => {
        beforeEach(() => {
            resp = setMany(testObj, testMap.object);
            console.log(resp);
        });

        it('returns value', () => {
            expect(resp).to.eql(testMap.object);
        });

        for (var i = 0; i < testObjects.length; i++) {
            const item = testObjects[i];
            const key = Object.keys(item)[0];
            it('sets property value', () => {
                expect(resp[key]).to.equal(item);
            });
        };
    });

    describe('get function', () => {
        beforeEach(() => {
            testObj.test = testMap.string;
        });

        it('gets value', () => {
            expect(get(testObj, 'test')).to.equal(testMap.string);
        });
    });
});
