import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBookInputType {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  releaseYear!: number;

  @Field()
  isbn!: string;

  @Field(() => [String])
  authorIds!: string[];
}
