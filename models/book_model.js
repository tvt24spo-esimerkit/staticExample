const book ={
    bookData:[
        {'name' :"C++", 'author' :"Jim Smith"},
        {'name' :"Java", 'author' :"Lisa Jones"},
        {'name' :"MySQL", 'author' :"Bob Danieles"}
    ],
    getAllBooks(callback){
        callback(this.bookData);
    }
}

module.exports=book;