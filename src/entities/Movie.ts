import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { MovieComment } from './MovieComment'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  year: string

  @Column()
  rate: Number;

  @OneToMany(() => MovieComment, movieComment => movieComment.movie)
  movieComments: MovieComment[];

}
