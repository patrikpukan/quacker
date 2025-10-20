// src/modules/authors/graphql/types/author.type.ts

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field(() => ID)
  id!: string;

  @Field()
  bio!: string;

  @Field()
  birthYear!: number;

  @Field()
  name!: string;

  bookIds!: string[];
}
