import { z, ZodType } from 'zod';

export class ProductValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(100),
    price: z.number().min(1).max(100),
    category: z.string().min(1).max(100),
  });
}

//   name: string;
//   price: number;
//   category: string;
//   description: string;
//   imageUrls: string;
//   createdBy: string;
