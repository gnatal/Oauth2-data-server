import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

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

}
