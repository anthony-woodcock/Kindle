var fs = require('fs')
var path = require('path')

function Chapter(file, name){
    this._file  = file
    this._name = name
}

Chapter.prototype = {

    read: function(){
        return fs.readFileSync(this._file, 'utf8')
    },

    getName: function(){
        return this._name
    }

}

module.exports = Chapter


