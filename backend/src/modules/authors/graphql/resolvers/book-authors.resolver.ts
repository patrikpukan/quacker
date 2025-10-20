import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BookType } from 'src/modules/books/graphql/types/book.type';
import { AuthorService } from '../../services/author.service';
import { AuthorType } from '../types/author.type';

@Resolver(() => BookType) // this tells us that we are now working with BookType
export class BookAuthorsResolver {
  constructor(private readonly authorService: AuthorService) {}

  @ResolveField(() => [AuthorType]) // this effectively adds a new field to the BookType (without having to specify it in the BookType class itself)
  async authors(@Parent() book: BookType): Promise<AuthorType[]> {
    // Assuming book.id is the ID of the book
    if (!book.id) {
      return [];
    }
    return this.authorService.getAuthorsByBookId(book.id);
  }
}
