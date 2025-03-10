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

@Module({
  imports: [PrismaModule, CategoryModule, AuthModule, UserModule, JwtModule],
  controllers: [CategoryController, AuthController, UserController],
  providers: [PrismaService, CategoryService, AuthService, UserService],
})
export class AppModule { }
