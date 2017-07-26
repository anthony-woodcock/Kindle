var fs = require('fs')
var path = require('path')


function Book(name , chapters){
    this._name = name
    this._chapters = chapters
}
Book.prototype = {

    getChapters: function (){
        return this._chapters 
    },

    getName: function (){
        return this._name
    }
}
module.exports = Book