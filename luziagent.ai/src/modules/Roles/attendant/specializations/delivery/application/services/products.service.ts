import { Product } from "../../interfaces/products.interface";
import {
  createProductRepository,
  findProductById,
  getAllProductsRepository,
  products,
} from "../repositories/products.repository";
import { ProductDto } from "../../dtos/products.dto";

export const createProductService = async (name: string, price: number): Promise<Product> => {
  const newProduct = new ProductDto(products.length + 1, name, price);

  const product_record = await createProductRepository(newProduct);

  return product_record;
};

export const getAllProductsService = async (): Promise<Product[]> => {
  return await getAllProductsRepository();
};

export const findProductByIdService = async (id: number): Promise<Product | undefined> => {
  return await findProductById(id);
};
