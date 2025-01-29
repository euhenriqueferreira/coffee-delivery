import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import heroBackground from '../../assets/hero-background.png';
import heroCoffee from '../../assets/hero-coffee.png';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import { BenefitItem } from './components/BenefitItem';
import { CoffeeItem } from './components/CoffeeItem';
import { CoffeeList, HeroSection, HomeContainer } from "./styles";

export function Home() {
    const { coffees } = useContext(CoffeesContext)

    return (
        <HomeContainer>
            <HeroSection>
                <img src={heroBackground} className='background' />
                <div className="hero-section__caption">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <ul>
                        <BenefitItem icon={ShoppingCart} text="Compra simples e segura" highlightColor="yellow-dark" />
                        <BenefitItem icon={Package} text="Embalagem mantém o café intacto" highlightColor="base-text" />
                        <BenefitItem icon={Clock} text="Entrega rápida e rastreada" highlightColor="yellow" />
                        <BenefitItem icon={Coffee} text="O café chega fresquinho até você" highlightColor="purple" />
                    </ul>
                </div>
                <div className="hero-section__image">
                    <img src={heroCoffee} alt="Copo de café" />
                </div>
            </HeroSection>

            <CoffeeList>
                <h2>Nossos cafés</h2>
                <ul>
                    {coffees.map((coffee) => {
                        return (
                            <CoffeeItem coffee={coffee} />
                        )
                    })}
                </ul>
            </CoffeeList>
        </HomeContainer>
    )
}