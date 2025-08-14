import { ProductDto } from "../../dtos/products.dto";
import { Product } from "../../interfaces/products.interface";

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
];

export const createProductRepository = async (product: ProductDto) => {
  try {
    products.push(product);
    return product;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const getAllProductsRepository = async (): Promise<Product[]> => {
  try {
    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    throw error;
  }
};

export const findProductById = async (id: number): Promise<Product | undefined> => {
  try {
    return products.find((product) => product.id === id);
  } catch (error) {
    console.error("Error finding product by ID:", error);
    throw error;
  }
};
