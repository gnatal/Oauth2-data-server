import { getRepository } from "typeorm";
import { Movie } from "../../entities/Movie";

export const createMovie = async (name:string, year: string, rate: Number) => {
    try{

        let movie = new Movie();
        movie.name = name;
        movie.year = year;
        movie.rate = rate;
        const movieRepository = getRepository(Movie);
        await movieRepository.save(movie);
        return movie;
    }catch (e){
        console.log (e);
        throw e;
    }
}