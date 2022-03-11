import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export const createBook = async (name:string, year: string, rate: Number, author: string) => {
    try{

        let book = new Book();
        book.name = name;
        book.year = year;
        book.rate = rate;
        book.author = author;
        const bookRepository = getRepository(Book);
        await bookRepository.save(book);
        return book;
    }catch (e){
        console.log (e);
        throw e;
    }
}