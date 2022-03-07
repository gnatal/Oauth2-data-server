import { getRepository } from "typeorm";
import { Movie } from "../../entities/Movie";

export const getMovies = async () => {
    const movieRepository = getRepository(Movie);
    const movies = await movieRepository.find();
    return movies;
}