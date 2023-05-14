import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
  ],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule { }
