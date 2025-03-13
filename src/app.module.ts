import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from '@app/user/user.module';
import { RestaurantModule } from '@app/restaurant/restaurant.module';
import { CategoryModule } from '@app/category/category.module';
import { LocationModule } from '@app/location/location.module';
import { CategoryController } from '@app/category/category.controller';
import { UserController } from '@app/user/user.controller';
import { RestaurantController } from '@app/restaurant/restaurant.controller';
import { LocationController } from '@app/location/location.controller';
import { CategoryService } from '@app/category/category.service';
import { UserService } from '@app/user/user.service';
import { RestaurantService } from '@app/restaurant/restaurant.service';
import { LocationService } from '@app/location/location.service';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, JwtModule, RestaurantModule, CategoryModule, LocationModule],
  controllers: [CategoryController, AuthController, UserController, RestaurantController, LocationController],
  providers: [PrismaService, CategoryService, AuthService, UserService, RestaurantService, LocationService],
})
export class AppModule { }
