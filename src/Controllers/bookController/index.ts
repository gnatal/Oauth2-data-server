import { Request, Response } from 'express';
import { getMovies } from '../../services/movie/getMovies';
import { createMovie } from '../../services/movie/create';
import { createBook } from '../../services/book/create';

export default class movieController {
    static async index(req:Request, res:Response) {
        try{
            const movies = await getMovies();
            return res.status(200).json(movies);
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
}