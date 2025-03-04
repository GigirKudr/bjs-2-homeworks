class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }
    

    set state (newState){
        if (newState < 0){
            this.state = 0
        }
        else if (newState > 100){
            this.state = 100
        }
        else{
            this._state = newState
        }
    }

    get state(){
        return this._state
    }
    
    fix(){
        this.state *= 1.5
    }

}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine"){
        super(name, releaseDate, pagesCount, state)
        this.type = type
    }
    
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book"){
        super(name, releaseDate, pagesCount, state)
        this.author = author
        this.type = type
        
    }
    
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel"){
        super(name, releaseDate, pagesCount, state)
        this.type = type
        this.author = author
    }
    
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic"){
        super(name, releaseDate, pagesCount, state)
        this.type = type
        this.author = author
    }
 
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective"){
        super(name, releaseDate, pagesCount, state)
        this.type = type
        this.author = author
    }
    
}

class Library{
    constructor(name){
        this.name = name
        this.books = []
    }
    addBook(book){
        if (book.state > 30){
            this.books.push(book)
        }
    }
    findBookBy(type, value){
        const findebByParamBook = this.books.find(item => item[type] === value)
        return !!findebByParamBook ? findebByParamBook : null
    }
    
    giveBookByName(bookName){
        const index = this.books.findIndex(book => book.name === bookName)
        if (index !== -1){
            return this.books.splice(index, 1)[0]
        }
        return null
    }

}