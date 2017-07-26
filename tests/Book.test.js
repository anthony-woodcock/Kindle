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

     book = new Book(chapters)
 })

    test('has chapters', function(){
        expect(book.getChapters()).toBe(chapters)
    })
   
})