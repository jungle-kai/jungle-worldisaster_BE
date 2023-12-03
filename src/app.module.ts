import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { DonateModule } from './donate/donate.module';
import { ChatModule } from './chat/chat.module';

import { LiveNewsModule } from './liveNews/liveNews.module';
import { CountryModule } from './country/country.module';
import { OldDisastersModule } from './oldDisasters/oldDisasters.module';
import { NewDisastersModule } from './newDisasters/newDisasters.module';
import { EmailAlertsModule } from './emailAlerts/emailAlerts.module';
import { PayPalModule } from './paypal/paypal.module';
import { ArchiveNewsModule } from './archiveNews/archiveNews.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    ScheduleModule.forRoot(),
    AuthModule, DonateModule, ChatModule, EmailAlertsModule,
    CountryModule, LiveNewsModule, OldDisastersModule, NewDisastersModule,PayPalModule, UploadModule, ArchiveNewsModule
  ],
})
export class AppModule { }