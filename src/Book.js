var fs = require('fs')
var path = require('path')


function Book(chapters){
    this._chapters = chapters
}
Book.prototype = {
    getChapters: function (){
        return this._chapters 
    }
}
module.exports = Book