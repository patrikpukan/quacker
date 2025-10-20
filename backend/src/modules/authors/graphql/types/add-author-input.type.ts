// src/modules/authors/graphql/inputs/add-author.input.ts

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddAuthorInputType {
  @Field()
  name!: string;

  @Field()
  bio!: string;

  @Field()
  birthYear!: number;

  @Field(() => [String]) // array of strings
  bookIds!: string[];
}
