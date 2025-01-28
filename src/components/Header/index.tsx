import { MapPin, ShoppingCart } from 'phosphor-react';
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png';
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Copo de café roxo com uma estampa de foguete decolando" />

            <nav>
                <div>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </div>

                <button>
                    <ShoppingCart size={22} weight="fill" />
                    <span>3</span>
                </button>
            </nav>
        </HeaderContainer>
    )
}