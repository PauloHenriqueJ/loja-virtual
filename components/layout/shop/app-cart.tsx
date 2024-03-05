'use client'
import { CartProvider } from "use-shopping-cart";

const stripekey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY


interface AppProviderProps {
    children: React.ReactNode;
}

export default function AppCartProvider({children}:AppProviderProps){
    return(
        <CartProvider
        shouldPersist={true}
        cartMode="checkout-session"
        stripe={stripekey}
        currency="BRL"
        >
            {children}
        </CartProvider>
    )
}