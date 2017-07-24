var fs = require('fs')
var path = require('path')

function Chapter (file){
    this._file = file


}

Chapter.prototype = {
read: function (){
    console.log(path.join(__dirname, '/fixtures/sampleChapter.txt'))
    return fs.readFileSync(this._file, 'utf8')
}

}

module.exports = Chapter

