var chai = require('chai')

var myFunctions = require( './app.js' )

var addS = myFunctions.addS

var assert = chai.assert


// console.dir(assert), allows you to see the object library//

// describe, it //


describe("create a funtion that adds an s to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(/*actual, expected*/ addS(['dog','cat', 'aligator']), ['dogs', 'cats', 'aligators'])
    })
    it("should not allow numbers into the array", function(){
        assert.equal(addS(['dogs', 0, 3]), 'no numbers')
    })
    it("should not add an s if the word ends with an s", function(){
        assert.deepEqual(addS(['dogs', 'cats']), ['dogs', 'cats'])
    })
})

