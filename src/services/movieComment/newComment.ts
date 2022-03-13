import { User } from '../../entities/user';
import { Movie } from '../../entities/Movie';
import { MovieComment } from '../../entities/MovieComment';
import { getRepository } from 'typeorm';

export const commentOnMovie = async (comment: string, movieId: string, userId: string) =>{
    try {
        const movieRepository = getRepository(Movie);
        const userRepository = getRepository(User);
        const movieCommentRepository = getRepository(MovieComment);
        const movie = await movieRepository.findOne(movieId);
        const user = await userRepository.findOne(userId);
        const movieComment = new MovieComment();
        movieComment.content = comment;
        movieComment.date = new Date().toDateString();
        movieComment.movie = (movie as Movie);
        movieComment.user = (user as User);
        await movieCommentRepository.save(movieComment);
        return movieComment;
    } catch (e) {
        console.log(e);
        return e;
    }
}