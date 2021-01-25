class Book {
    constructor(
        id, 
        title,
        author, 
        categoryIds, 
        releaseDate, 
        language, 
        publisher, 
        imageUrl
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.categoryIds = categoryIds;
        this.releaseDate = releaseDate;
        this.language = language;
        this.publisher = publisher;
        this.imageUrl = imageUrl;
        // Info for filtering below
        this.isBiography = isBiography;
        this.isThriller = isThriller;
    }
}

export default Book;
