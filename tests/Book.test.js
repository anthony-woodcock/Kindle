var Chapter = require('../src/Chapter')
var path = require('path')
var Book = require('../src/Book')


describe('Book', function(){
var chapters = []
var book 

 beforeEach(function () {
     for(var i = 0; i <= 12 ; i++ ){
        chapters.push(new Chapter(path.join(__dirname, '/fixtures/sampleChapter.txt')))
     }

     book = new Book('Harry Potter', chapters)
 })

    test('has chapters', function(){
        expect(book.getChapters()).toBe(chapters)
    })
   
    test('has a name', function(){
        expect(book.getName()).toBe('Harry Potter')
    })



})