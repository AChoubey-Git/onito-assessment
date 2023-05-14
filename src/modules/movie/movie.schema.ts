import { BaseColumnSchemaPart } from "src/common/constant/base-column.schema";
import { EntitySchema } from "typeorm";
import { Movie } from "./entities/movie.entity";

export const MovieSchema = new EntitySchema<Movie>({
    name: "movies",
    columns: {
        ...BaseColumnSchemaPart,
        titleType: {
            type: String,
        },
        runtimeMinutes: {
            type: Number,
        },
        primaryTitle: {
            type: String,
        },
        genres: {
            type: String
        },
    },
})