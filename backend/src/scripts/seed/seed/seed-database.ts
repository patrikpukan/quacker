import { PrismaService } from '../../../core/prisma/prisma.service';
import { BetterAuth } from '../../../shared/auth/providers/better-auth.provider';
import { Config } from '../../../shared/config/config.service';
import { createAuthor } from './create-author';
import { createBook } from './create-book';
import { createQuack } from './create-quack';
import { createUser } from './create-user';

export const seedDatabase = async (
  prisma: PrismaService,
  config: Config,
  betterAuth: BetterAuth,
): Promise<void> => {
  const auth = betterAuth;

  // Drop existing database data from all tables
  try {
    // In MySQL/MariaDB, we need to disable foreign key checks temporarily
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0;');

    await prisma.$executeRawUnsafe('TRUNCATE TABLE `quack`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `user`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `verification`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `account`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `session`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `book`;');
    await prisma.$executeRawUnsafe('TRUNCATE TABLE `author`;');

    // Re-enable foreign key checks
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1;');
  } catch (error) {
    console.error('Error truncating tables:', error);
  }

  console.log('Creating superadmin user');

  // Create a superadmin user. This should be delete in prod app
  await createUser(prisma, auth, {
    email: config.superadminEmail,
    password: config.superadminPassword,
    name: 'Admin (Delete in Prod)',
    username: 'superadmin',
    role: 'admin',
    profilePictureUrl: 'uploads/profile-pictures/superadminavatar.png',
  });

  console.log('Creating example users');

  const user1 = await createUser(prisma, auth, {
    email: 'caffeinatedduck@example.com',
    password: 'password1',
    name: 'Caffeinated Duck',
    username: 'CaffeinatedDuck',
    profilePictureUrl: 'uploads/profile-pictures/caffeduckavatar.png',
  });

  const user2 = await createUser(prisma, auth, {
    email: 'deepduckthoughts@example.com',
    password: 'password2',
    name: 'Deep Duck Thoughts',
    username: 'DeepDuckThoughts',
    profilePictureUrl: 'uploads/profile-pictures/deepduckavatar.png',
  });

  console.log('Creating example quacks');

  // Create 3 example posts on software productivity at Applifting
  await createQuack(prisma, {
    text: `just spilled coffee on my keyboard
now every time i type "duck" it autocorrects to "quack"
send help or more caffeine`,
    userId: user1.id,
  });

  await createQuack(prisma, {
    text: `If ducks wore pants, would they wear them on their legs or over their whole lower half like a cape?
Asking for a friend. A feathery friend.`,
    userId: user2.id,
  });

  await createQuack(prisma, {
    text: `me: throws one crumb into the pond
ducks: assemble like the Avengers
i fear i may have started something`,
    userId: user1.id,
  });

  console.log('Creating example books');

  // Create books using the helper function
  const book1 = await createBook(prisma, {
    title: 'The Great Gatsby',
    description:
      'A classic American novel set in the Jazz Age, following the mysterious Jay Gatsby and his obsession with the beautiful Daisy Buchanan.',
    releaseYear: 1925,
    isbn: '978-0-7432-1877-5',
  });

  const book2 = await createBook(prisma, {
    title: 'The Old Man and the Sea',
    description:
      'A short novel about an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream.',
    releaseYear: 1952,
    isbn: '978-0-684-80122-3',
  });

  console.log('Creating example authors');

  const author1 = await createAuthor(prisma, {
    name: 'F. Scott Fitzgerald',
    bio: 'American novelist, essayist, and short story writer, best known for his novels depicting the flamboyance and excess of the Jazz Age. A member of the "Lost Generation" of American writers.',
    birthYear: 1896,
  });

  const author2 = await createAuthor(prisma, {
    name: 'Ernest Hemingway',
    bio: 'American novelist, short-story writer, and journalist. Known for his economical and understated writing style, he won the Nobel Prize in Literature in 1954.',
    birthYear: 1899,
  });

  await prisma.book.update({
    where: { id: book1 },
    data: {
      authors: {
        connect: [{ id: author1 }],
      },
    },
  });

  await prisma.book.update({
    where: { id: book2 },
    data: {
      authors: {
        connect: [{ id: author2 }],
      },
    },
  });

  console.log('Seeding database completed');
};
