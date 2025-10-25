import IProduct from "../IProduct.ts";

export interface ProductResponse {
    product:IProduct
}

export interface IProductRequest{
    formData: FormData,
    userId:string
}