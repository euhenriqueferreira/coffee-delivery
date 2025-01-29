import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { CoffeeItemContainer } from "./styles"


interface CoffeeItemProps {
    coffee: Coffee,
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
    return (
        <CoffeeItemContainer>
            <img src={coffee.imagePath} alt={coffee.coffeeName} />

            <div className="traits">
                {coffee.traits.map((trait) => {
                    return (
                        <span>{trait.title}</span>
                    )
                })}
            </div>

            <h3>{coffee.coffeeName}</h3>

            <p>{coffee.coffeeDescription}</p>

            <footer>
                <span className="price">R$<strong>{coffee.coffeePrice}</strong></span>

                <div className="counter">
                    <button>
                        <Minus size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                        <Plus size={14} weight="bold" />
                    </button>
                </div>
                <button className="cart">
                    <ShoppingCart size={22} weight="fill" />
                </button>
            </footer>
        </CoffeeItemContainer>
    )
}