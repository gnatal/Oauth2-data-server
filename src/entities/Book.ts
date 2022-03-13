import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { BookComent } from './BookComment';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  author: string;

  @Column()
  year: string

  @Column()
  rate: Number;

  @OneToMany(() => BookComent, bookComment => bookComment.book)
  bookComments: BookComment[];

}
