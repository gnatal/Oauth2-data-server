import {Request, Response} from 'express';
import { getMovies } from '../../services/movie/getMovies';
import { createMovie } from '../../services/movie/create';
import { commentOnMovie } from '../../services/movieComment/newComment';

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
            const {name, year, rate} = req.body;
            const movie = await createMovie(name, year, rate);
            return res.status(201).json({message: 'create movie', movie});
        }catch(e){
            console.log(e);
            return res.status(500).json({message: 'Internal server error'});
        }
    }

    static async comment(req:Request, res:Response) {
        try{
            const {content, movieId, userId} = req.body;
            const newCommnet = await commentOnMovie(content, movieId, userId)
            return res.status(201).json({message: 'create comment', newCommnet});
        }catch(e){
            console.log(e);
            return res.status(500).json({message: 'Internal server error'});
        }
    }
}