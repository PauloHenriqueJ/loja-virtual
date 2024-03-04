import Logo from '@/components/ui/logo'
import CartButton from '@/components/layout/cart-button'
import UserNav from '@/components/layout/user-nav'
export default function Header(){
    return(
    <header className="sticky top-0 z-10 shadow">
        <div className="container ms-auto p-4 flex items-center
        justify-between">
            <Logo/>
            <div className='flex items-center justify-center space-x-4'>
                <CartButton/>
                <UserNav/>

            </div>

        </div>
    </header>
    )
}