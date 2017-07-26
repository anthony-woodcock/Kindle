var Chapter = require('../src/Chapter')
var path = require('path')
var Book = require('../src/Book')
var Library = require('../src/Library')

describe('Library', function(){
var library 







 beforeEach(function () {
   library = new Library()
 })

    test('has no books when instantiated', function(){
       expect(library.getBooks()).toHaveLength(0)
    })
   
})