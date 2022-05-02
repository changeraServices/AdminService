import { Module } from '@nestjs/common';
import { MerchantsModule } from './modules/merchants/merchants.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { CacheModule } from './modules/cache/cache.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    MerchantsModule,
    UsersModule,
    DatabaseModule,
    CacheModule,
    OrdersModule,
    ProductsModule,
    NotificationsModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({ load: [config] }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
