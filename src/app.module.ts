import { Module } from '@nestjs/common';
import { CategoryModule } from './app/Category/category.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './app/User/user.module';
import { CategoryController } from './app/Category/category.controller';
import { AuthController } from './auth/auth.controller';
import { UserController } from './app/User/user.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './app/User/user.service';
import { CategoryService } from './app/Category/category.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { RestaurantModule } from './app/Restaurant/restaurant.module';
import { RestaurantController } from './app/Restaurant/restaurant.controller';
import { RestaurantService } from './app/Restaurant/restaurant.service';
import { LocationModule } from './app/Location/location.module';
import { LocationController } from './app/Location/location.controller';
import { LocationService } from './app/Location/location.service';

@Module({
  imports: [PrismaModule, CategoryModule, AuthModule, UserModule, JwtModule, RestaurantModule, CategoryModule, LocationModule],
  controllers: [CategoryController, AuthController, UserController, RestaurantController, CategoryController, LocationController],
  providers: [PrismaService, CategoryService, AuthService, UserService, RestaurantService, CategoryService, LocationService],
})
export class AppModule { }
