import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '@/app/user/user.module';
import { RestaurantModule } from '@/app/restaurant/restaurant.module';
import { CategoryModule } from '@/app/category/category.module';
import { LocationModule } from '@/app/location/location.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, JwtModule, RestaurantModule, CategoryModule, LocationModule],
})
export class AppModule { }
