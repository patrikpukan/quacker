import { ConfigModule } from '@applifting-io/nestjs-decorated-config';
import { Module } from '@nestjs/common';
import { EmailModule } from 'src/core/email/email.module';
import { SMTPConfig } from 'src/core/email/smtp/interfaces/smtp-config.interface';
// Replace ConsoleMailerAdapterFactory with SMTPAdapterFactory
import { SMTPAdapterFactory } from 'src/core/email/smtp/smtp.adapter.factory';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { Config } from '../config/config.service';
import { EmailTemplateModule } from '../email-template/email-template.module';
import { betterAuthProvider } from './providers/better-auth.provider';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRootAsync(Config, {
      validate: true,
      printOnStartup: true,
    }),
    EmailModule.forRootAsync({
      useFactory: async (config: Config) => {
        // Replace console mailer with SMTP adapter
        const smtpConfig: SMTPConfig = {
          host: config.smtpHost,
          port: config.smtpPort,
          secure: config.smtpSecure,
          user: config.smtpUsername,
          pass: config.smtpPassword,
        };
        return SMTPAdapterFactory.create(smtpConfig);
      },
      inject: [Config],
    }),
    EmailTemplateModule,
  ],
  providers: [betterAuthProvider],
  exports: [betterAuthProvider],
})
export class AuthModule {}
