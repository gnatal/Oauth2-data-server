import { User } from '../../entities/user';
import { Book } from '../../entities/Book';
import { BookComent } from '../../entities/BookComment';
import { getRepository } from 'typeorm';

export const commentOnBook = async (comment: string, bookId: string, userId: string) =>{
    try {
        const bookRepository = getRepository(Book);
        const userRepository = getRepository(User);
        const bookCommentRepository = getRepository(BookComent);
        const book = await bookRepository.findOne(bookId);
        const user = await userRepository.findOne(userId);
        const bookComment = new BookComent();
        bookComment.content = comment;
        bookComment.date = new Date().toDateString();
        bookComment.book = (book as Book);
        bookComment.user = (user as User);
        await bookCommentRepository.save(bookComment);
        return bookComment;
    } catch (e) {
        console.log(e);
        return e;
    }
}