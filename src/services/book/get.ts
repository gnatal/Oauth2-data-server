import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export const getBooks = async () => {
    const bookRepository = getRepository(Book);
    const books = await bookRepository.find({relations: ["bookComments"]});
    return books;
}