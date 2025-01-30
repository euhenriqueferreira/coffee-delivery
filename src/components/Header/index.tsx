import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import { HeaderContainer } from "./styles";

export function Header() {
    const { coffeesInCart, userAddressData } = useContext(CoffeesContext)

    const userAddressToRender = userAddressData
        ? (userAddressData.city + ', ' + userAddressData.uf)
        : 'Indefinido'

    return (
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={logoCoffeeDelivery} alt="Copo de café roxo com uma estampa de foguete decolando" />
            </NavLink>

            <nav>
                <div>
                    <MapPin size={22} weight="fill" />
                    {userAddressToRender}
                    {/* Porto Alegre, RS */}
                </div>

                <NavLink to={'/checkout'} className="cart">
                    <ShoppingCart size={22} weight="fill" />
                    <span>{coffeesInCart.length}</span>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}