import { ChatCompletionMessageParam } from "openai/resources/index";
import { Product } from "../interfaces/products.interface";

export class ProductDto implements Product {
  constructor(readonly id: number, readonly name: string, readonly price: number) {}
}
