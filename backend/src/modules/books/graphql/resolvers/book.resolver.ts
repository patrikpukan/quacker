import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/shared/auth/decorators/user.decorator';
import { Identity } from 'src/shared/auth/domain/identity';
import { AuthenticatedUserGuard } from 'src/shared/auth/guards/authenticated-user.guard';
import { BookService } from '../../services/book.service';
import { AddBookInputType } from '../types/add-book-input.type';
import { BookType } from '../types/book.type';

@Resolver()
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [BookType])
  async books(): Promise<BookType[]> {
    return this.bookService.getBooks();
  }

  @Mutation(() => BookType)
  async addBook(@Args('data') data: AddBookInputType): Promise<BookType> {
    return await this.bookService.addBook(data);
  }

  @Mutation(() => BookType, { nullable: true })
  @UseGuards(AuthenticatedUserGuard)
  async deleteBook(
    @User() user: Identity,
    @Args('bookId') bookId: string,
  ): Promise<null> {
    // we have scope of user here
    console.log(user);
    return await this.bookService.deleteBook(bookId);
  }
}
