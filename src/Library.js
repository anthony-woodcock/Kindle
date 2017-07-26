var fs = require('fs')
var path = require('path')

function Library(){
    this._books = []
}

Library.prototype = {
      getBooks: function (){
        return this._books 
    }
}

module.exports = Library

