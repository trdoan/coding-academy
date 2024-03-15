import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @HideField()
    activedAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    lockedAt?: Date | string;
}
