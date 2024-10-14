import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductRequest, ProductResponse } from 'src/model/product.model';
import { WebResponse } from 'src/model/web.model';

@Controller('/api/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateProductRequest,
  ): Promise<WebResponse<ProductResponse>> {
    const result = await this.productService.create(request);

    return {
      data: result,
    };
  }
}
