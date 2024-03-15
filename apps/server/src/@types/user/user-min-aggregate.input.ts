import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    displayName?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @HideField()
    activedAt?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    lockedAt?: true;
}
