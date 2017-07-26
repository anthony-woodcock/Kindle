var Chapter = require('../src/Chapter')
var path = require('path')
var Book = require('../src/Book')
var Library = require('../src/Library')

describe('Library', function(){
var library 
var book


 beforeEach(function () {
   library = new Library()
   book = new Book()

 })

    test('has no books when instantiated', function(){
       expect(library.getBooks()).toHaveLength(0)
    })

    test('can have a book added', function(){
        library.addBook(book)

        expect(library.getBooks()).toContain(book)

    })
   
})