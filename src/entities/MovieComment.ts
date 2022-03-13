import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Movie } from './Movie'
import { User } from './user'

@Entity()
export class MovieComment {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: string

  @Column()
  content: string

  @ManyToOne(() => Movie, movie => movie.movieComments)
  movie: Movie;

  @ManyToOne(() => User)
  user: User;

}
