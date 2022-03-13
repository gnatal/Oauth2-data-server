import { Request, Response } from 'express';
import { getMovies } from '../../services/movie/getMovies';
import { createMovie } from '../../services/movie/create';
import { createBook } from '../../services/book/create';
import { getBooks } from '../../services/book/get';
import { commentOnBook } from '../../services/bookComment/bookComment';

export default class bookController {
    static async index(req:Request, res:Response) {
        try{
            const books = await getBooks();
            return res.status(200).json(books);
        }catch(e){
            console.log(e);
            return res.status(500).json({message: 'Internal server error'});
        }
    }

    static async create(req:Request, res:Response) {
        try{
            const {name, year, rate, author} = req.body;
            const book = await createBook(name, year, rate, author);
            return res.status(201).json({message: 'created book', book});
        }catch(e){
            console.log(e);
            return res.status(500).json({message: 'Internal server error'});
        }
    }

    static async comment(req: Request, res: Response){
        try{
            const {content, bookId, userId} = req.body;
            const newCommnet = await commentOnBook(content, bookId, userId)
            return res.status(201).json({message: 'create comment', newCommnet});
        }catch(e){
            console.log(e);
            return res.status(500).json({message: 'Internal server error'});
        }
    }
}