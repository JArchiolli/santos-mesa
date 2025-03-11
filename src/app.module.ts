import { Module } from '@nestjs/common';
import { CategoryModule } from './app/category/category.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './app/user/user.module';
import { CategoryController } from './app/category/category.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './app/user/user.service';
import { CategoryService } from './app/category/category.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { RestaurantModule } from './app/restaurant/restaurant.module';
import { LocationModule } from './app/location/location.module';
import { LocationController } from './app/location/location.controller';
import { LocationService } from './app/location/location.service';
import { UserController } from './app/user/user.controller';
import { RestaurantController } from './app/restaurant/restaurant.controller';
import { RestaurantService } from './app/restaurant/restaurant.service';

@Module({
  imports: [PrismaModule, CategoryModule, AuthModule, UserModule, JwtModule, RestaurantModule, CategoryModule, LocationModule],
  controllers: [CategoryController, AuthController, UserController, RestaurantController, CategoryController, LocationController],
  providers: [PrismaService, CategoryService, AuthService, UserService, RestaurantService, CategoryService, LocationService],
})
export class AppModule { }
