export class ProductResponse {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrls: string;
  createdBy: string;
}

export class CreateProductRequest {
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrls: string;
  createdBy: string;
}
