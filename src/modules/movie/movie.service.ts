import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  private schema: string;
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    private configService: ConfigService,
  ) {
    this.schema = this.configService.get('DATABASE_SCHEMA');
  }
  insert(movie: any) {
    return this.movieRepository.insert(movie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }

  async getLogestDurationMovies() {
    return this.movieRepository
      .query(`select * from ${this.schema}.movies group by tconst order by max(runtimeMinutes) desc limit 10`);
  }

  async updateRuntimeMinutes(query?: string) {
    if (query) {
      return await this.movieRepository.query(query);
    } else {
      await this.movieRepository
        .query(`update ${this.schema}.movies
      set runtimeMinutes = 
      case genres
        when "Documentary" then runtimeMinutes + 15
        when "Animation" then runtimeMinutes + 30
        else runtimeMinutes + 45
      end`.trim());

      return this.movieRepository.find();
    }
  }

  async getGenreMoviesWithSubtotals() {
    return this.movieRepository
      .query(`
    select 
      case 
        when grouping(primaryTitle)=1 and grouping(genres) = 0 then "Total"
        when grouping(primaryTitle)=1 and grouping(genres) = 1 then "Grand Total"
        else genres
      end as genres,
    movie.primaryTitle,
    sum(rating.numVotes) as numVotes 
    from ${this.schema}.movies as movie
    inner join ${this.schema}.ratings as rating on movie.tconst = rating.tconst 
    group by genres,primaryTitle with rollup
    `.trim())
  }
}
