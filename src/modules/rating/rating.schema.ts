import { BaseColumnSchemaPart } from "src/common/constant/base-column.schema";
import { EntitySchema } from "typeorm";
import { Rating } from "./entities/rating.entity";

export const RatingSchema = new EntitySchema<Rating>({
    name: "ratings",
    columns: {
        ...BaseColumnSchemaPart,
        averageRating: {
            type: Number,
        },
        numVotes: {
            type: Number,
        },
    },
})