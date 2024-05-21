import {Api, ApiListResponse} from "./base/api";
import {IProduct} from "../types";

export interface IProductApi {
  getProducts: () => Promise<Array<IProduct>>
  getProduct: (id: string) => Promise<IProduct | null>
}


export class ProductApi extends Api implements IProductApi {
  private readonly cdnUrl: string;

  constructor(cdnUrl: string, baseUrl: string, options: RequestInit = {}) {
    super(baseUrl, options);
    this.cdnUrl = cdnUrl;
  }

  private prepareProductItem(product: IProduct): IProduct {
    return {
      ...product,
      image: this.cdnUrl + product.image
    }
  }

  getProducts(): Promise<Array<IProduct>> {
    return this.get('/product')
      .then((data: ApiListResponse<IProduct>) => data.items.map(item => this.prepareProductItem(item)))
      .catch(() => []);
  }

  getProduct(id: string): Promise<IProduct | null> {
    return this.get(`/product/${id}`)
      .then((data: IProduct) => this.prepareProductItem(data))
      .catch(() => null)
  }
}
