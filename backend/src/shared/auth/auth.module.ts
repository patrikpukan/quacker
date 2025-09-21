import { ConfigModule } from '@applifting-io/nestjs-decorated-config';
import { Module } from '@nestjs/common';
import { ConsoleMailerAdapterFactory } from 'src/core/email/console-mailer/console-mailer.adapter.factory';
import { EmailModule } from 'src/core/email/email.module';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { Config } from '../config/config.service';
import { EmailTemplateModule } from '../email-template/email-template.module';
import { betterAuthProvider } from './providers/better-auth.provider';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRootAsync(Config, { validate: true, printOnStartup: true }),
    EmailModule.forRootAsync({
      useFactory: async () => {
        return ConsoleMailerAdapterFactory.create();
      },
      inject: [Config],
    }),
    EmailTemplateModule,
  ],
  providers: [betterAuthProvider],
  exports: [betterAuthProvider],
})
export class AuthModule {}
