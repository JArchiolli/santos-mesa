import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoryController } from './app/category/category.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryModule } from './app/category/category.module';
import { CategoryService } from './app/category/category.service';
import { UserService } from './app/user/user.service';
import { RestaurantService } from './app/restaurant/restaurant.service';
import { UserController } from './app/user/user.controller';
import { RestaurantController } from './app/restaurant/restaurant.controller';
import { RestaurantModule } from './app/restaurant/restaurant.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './auth/auth.module';
import { LocationController } from './app/location/location.controller';
import { LocationModule } from './app/location/location.module';
import { LocationService } from './app/location/location.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [PrismaModule, CategoryModule, AuthModule, UserModule, JwtModule, RestaurantModule, CategoryModule, LocationModule],
  controllers: [CategoryController, AuthController, UserController, RestaurantController, CategoryController, LocationController],
  providers: [PrismaService, CategoryService, AuthService, UserService, RestaurantService, CategoryService, LocationService],
})
export class AppModule { }
