export interface Product {
    id:string;
    name:string;
    description?:string;
    price:string;
    currency:string;
    image:string;
    images?:string[];
}

export interface DummyProduct{
    id:string;
    title:string;
    description:string;
    price:string;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:string[];

    
}
 
    