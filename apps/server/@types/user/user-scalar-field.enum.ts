import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    displayName = "displayName",
    password = "password",
    activedAt = "activedAt",
    createdAt = "createdAt",
    deletedAt = "deletedAt",
    updatedAt = "updatedAt",
    lockedAt = "lockedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
