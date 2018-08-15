var chai = require('chai');
var myData = require('./app.js')
var assert = chai.assert;
var people = myData.people;
var sortedOfAge = myData.sortedOfAge;
var over18 = myData.over18;
var liFinish = myData.liFinish;




describe("Should return an array of all people older than 18, in a li element, alpebetically", function(){
    it("returns an array of everyone older than 18", function(){
        assert.deepEqual(sortedOfAge(people), over18)
    } )
    it("has that list sorted by li element", function(){
        assert.equal(sortedOfAge(people), liFinish)
    } )
    // it("returns in alphebetal last name order", function(){
    //     assert.
    // } )
} )