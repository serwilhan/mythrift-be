import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [CommonModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
