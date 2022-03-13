import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Book } from './Book'
import { User } from './user'

@Entity()
export class BookComent {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: string

  @Column()
  content: string

  @ManyToOne(() => Book, book => book.bookComments)
  book: Book;

  @ManyToOne(() => User)
  user: User;

}
