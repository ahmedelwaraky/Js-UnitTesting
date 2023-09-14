const { capitalizeText, createArray } = require('../index')
const { assert, expect } = require("chai");
const should = require("chai").should();

QUnit.module('../index.js') //Qunit


QUnit.describe("test that the function takes a string  it will return a string ", () => { //Qunit
    it("test function takes string", () => {
        const input ="string";
        assert.isString(input , "string");
        expect(()=> isString(input , "string"));
        (input).should.be.a("string");
    });

    it("should take a string and return it after capitalizing it", () => {
        var  input=  "STRING"
        var upperCasre= input.toUpperCase()
        assert.equal(input ,upperCasre )
    });

    it("should throw a TypeError if the parameter is not a string", () => {
        expect(() => capitalizeText(123)).Throw(TypeError, "parameter should be string");
        assert.throw(() => {capitalizeText(123)},TypeError,"parameter should be string");
        (()=> capitalizeText(123)).should.Throw(TypeError, "parameter should be string");
    });

    it.skip("should throw a TypeError if the parameter is not a string", () => {
        expect(() => capitalizeText(123)).Throw(TypeError, "parameter should be string");
        assert.throw(() => {capitalizeText(123)},TypeError,"parameter should be string");
        (()=> capitalizeText(123)).should.Throw(TypeError, "parameter should be string");
    });
    
});

QUnit.describe("test that the return value of type array", () => { //Qunit
    it("test that the return value of type array", () => {
        const result = createArray(3);
        assert(Array.isArray(result));
    });

    it("test if we pass 3 it will return array of length 3 and test it's include 1", () => {
        const result = createArray(3);
        assert.lengthOf(result, 3);
        assert.include(result, 1);
    });
});


setTimeout(() => {
    run()
}, 2000); 