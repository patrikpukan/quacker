import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorType } from 'src/modules/authors/graphql/types/author.type';
import { BookType } from 'src/modules/books/graphql/types/book.type';
import { BookService } from '../../services/book.service';

@Resolver(() => AuthorType) // this tells us that we are now working with AuthorType
export class AuthorBooksResolver {
  constructor(private readonly bookService: BookService) {}

  @ResolveField(() => [BookType]) // this effectively adds a new field to the AuthorType (without having to specify it in the AuthorType class itself)
  async books(@Parent() author: AuthorType): Promise<BookType[]> {
    // Assuming author.id is the ID of the author
    if (!author.id) {
      return [];
    }
    return this.bookService.getBooksByAuthorId(author.id);
  }
}
