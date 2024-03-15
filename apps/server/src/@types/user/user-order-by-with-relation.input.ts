import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @HideField()
    activedAt?: SortOrderInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: SortOrderInput;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    lockedAt?: SortOrderInput;
}
