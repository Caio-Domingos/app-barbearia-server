import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './routes/clients/clients.module';
import { BarbersModule } from './routes/barbers/barbers.module';
import { ClientBarbersModule } from './routes/client-barbers/client-barbers.module';
import { SchedulesModule } from './routes/schedules/schedules.module';
import { ClientConfigurationsModule } from './routes/client-configurations/client-configurations.module';
import { BarberConfigurationsModule } from './routes/barber-configurations/barber-configurations.module';
import { AuthModule } from './routes/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_CONN'),
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
    ClientsModule,
    BarbersModule,
    ClientBarbersModule,
    SchedulesModule,
    ClientConfigurationsModule,
    BarberConfigurationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
