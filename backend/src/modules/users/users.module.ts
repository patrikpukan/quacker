import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { QuackModule } from 'src/modules/quack/quack.module';
import { AuthModule } from 'src/shared/auth/auth.module';
import { PermissionsModule } from 'src/shared/permissions/permissions.module';
import { QuackUserResolver } from './graphql/resolvers/quack-user.resolver';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [AuthModule, PrismaModule, PermissionsModule, QuackModule],
  providers: [UserRepository, UserService, UserResolver, QuackUserResolver],
})
export class UsersModule {}
