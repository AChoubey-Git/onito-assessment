import { EntitySchemaColumnOptions } from "typeorm"

export const BaseColumnSchemaPart = {
    tconst: {
        type: String,
        primary: true,
    } as EntitySchemaColumnOptions,
    createdAt: {
        name: "created_at",
        type: Date,
        createDate: true,
    } as EntitySchemaColumnOptions,
    updatedAt: {
        name: "updated_at",
        type: Date,
        updateDate: true,
    } as EntitySchemaColumnOptions,
}