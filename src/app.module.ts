import { Module } from '@nestjs/common';
import { CategoryModule } from './app/Category/category.module';

@Module({
  imports: [CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
