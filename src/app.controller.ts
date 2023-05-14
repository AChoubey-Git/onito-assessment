import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MovieDto } from './modules/movie/dto/movie.dto';
import { MovieService } from './modules/movie/movie.service';
import { RatingService } from './modules/rating/rating.service';

@Controller("api/v1")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private movieService: MovieService,
    private ratingService: RatingService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('longest-duration-movies')
  async getLogestDurationMovies(@Res() res) {
    const movies = await this.movieService.getLogestDurationMovies();
    res.send(movies);
  }

  @Post('new-movie')
  async addMovie(@Body() body: MovieDto, @Res() res) {
    try {
      await this.movieService.insert(body);
      res.send({ message: "success", });
    } catch (error) {
      res.send(
        {
          code: error.code,
          sqlMessage: error.sqlMessage
        }
      )
    }
  }

  @Get("top-rated-movies")
  async geTopRatedMovies(@Res() res) {
    const movies = await this.ratingService.geTopRatedMovies();
    res.send(movies);
  }

  @Get("genre-movies-with-subtotals")
  async getGenreMoviesWithSubtotals(@Res() res) {
    const movies = await this.movieService.getGenreMoviesWithSubtotals();
    res.send(movies)
  }

  @Post('update-runtime-minutes')
  async updateRuntimeMinutes(@Body() body: { query?: string }, @Res() res) {
    try {
      const movies = await this.movieService.updateRuntimeMinutes(body.query)
      res.send(movies);
    } catch (error) {
      res.send(
        {
          code: error.code,
          sqlMessage: error.sqlMessage
        }
      )
    }
  }
}
