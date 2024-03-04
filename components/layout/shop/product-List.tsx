import stripe from "@/lib/stripe"
import { Product } from "@/types"
import Stripe from "stripe"
import ProductCard from "@/components/layout/shop/product-card";

async function getProducts (){

    try {
        const stripeProduct = await stripe.products.list({
            limit:9,
            expand:["data.default_price"]
        })
        return stripeProduct.data.map((p:Stripe.Product): Product => {
            return {
                id: p.id,
                name: p.name,
                description: p.description ?? "",
                price: (p.default_price  as Stripe.Price).unit_amount_decimal ?? "0",
                currency: (p.default_price  as Stripe.Price)?.currency?? "BRL",
              images: p.images,
              image:p.images[0],
            }
        })
    } catch (e) {
        console.log(e)
        
    }
}

export default async function ProductList(){
    const products = await getProducts()
    return(
        <section>
        {products?.map((p) => (
            <ProductCard {...p}/>
        ))}
        </section>
    )
}