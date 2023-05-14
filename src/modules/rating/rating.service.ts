import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';


@Injectable()
export class RatingService {
  private schema :string;
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    private configService: ConfigService,
  ) { 
    this.schema = this.configService.get('DATABASE_SCHEMA');
  }

  async geTopRatedMovies() {
    return this.ratingRepository
      .query(`SELECT movies.tconst , movies.primaryTitle , averageRating , movies.genres from ${this.schema}.ratings as rating  inner join ${this.schema}.movies on movies.tconst = rating.tconst where rating.averageRating > 6.0  order by rating.averageRating`)
  }
}
