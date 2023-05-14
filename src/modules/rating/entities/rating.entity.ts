import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'ratings' })
export class Rating {

    @Column({ unique: true })
    @PrimaryColumn()
    tconst: string;

    @Column()
    averageRating: number;

    @Column()
    numVotes: number;
}
