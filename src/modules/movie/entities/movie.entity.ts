import { Rating } from 'src/modules/rating/entities/rating.entity';
import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: "movies" })
export class Movie {
    @Column({ unique: true })
    @PrimaryColumn()
    tconst: string;

    @Column()
    titleType: string;

    @Column()
    primaryTitle: string;

    @Column()
    runtimeMinutes: number;

    @Column()
    genres: string;

}
