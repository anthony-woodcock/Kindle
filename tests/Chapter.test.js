var Chapter = require('../src/Chapter')
var fs = require('fs')

var path = require('path')

path.join('abc', 'easy/as', '123.txt')


describe('Chapter', function () {
  var chapter

  beforeEach(function () {
    chapter = new Chapter(path.join(__dirname, 'fixtures/sampleChapter.txt'))
  })

test('outputs content from chapter file', function () {
  var content = fs.readFileSync(path.join(__dirname, '/fixtures/sampleChapter.txt'), 'utf8')

  expect(chapter.read()).toBe(content)
})


})


