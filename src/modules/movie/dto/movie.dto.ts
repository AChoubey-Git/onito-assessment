import { IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    tconst: string;

    @IsString()
    @IsNotEmpty()
    titleType: string;

    @IsString()
    @IsNotEmpty()
    primaryTitle: string;

    @IsNumber()
    @IsNotEmpty()
    runtimeMinutes: number;

    @IsString()
    @IsNotEmpty()
    genres: string;
}