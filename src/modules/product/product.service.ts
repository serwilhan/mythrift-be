import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from 'src/common/prisma.service';
import { CreateProductRequest, ProductResponse } from 'src/model/product.model';
import { ValidationService } from 'src/common/validation.service';
import { ProductValidation } from './product.validation';

@Injectable()
export class ProductService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(request: CreateProductRequest): Promise<ProductResponse> {
    this.logger.debug(`ProductService.create(${JSON.stringify(request)})`);

    const createRequest: CreateProductRequest = this.validationService.validate(
      ProductValidation.CREATE,
      request,
    );

    const product = await this.prismaService.product.create({
      data: createRequest,
    });

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      imageUrls: product.imageUrls,
      createdBy: product.createdBy,
    };
  }
}
