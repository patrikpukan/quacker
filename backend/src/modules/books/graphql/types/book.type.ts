import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  releaseYear?: number;

  @Field({ nullable: true })
  isbn?: string;

  authorIds!: string[];
}
