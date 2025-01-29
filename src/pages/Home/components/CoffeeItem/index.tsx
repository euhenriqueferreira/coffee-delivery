import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useEffect, useState } from "react"
import { Coffee } from "../../../../contexts/CoffeesContext"
import { CoffeeItemContainer } from "./styles"


interface CoffeeItemProps {
    coffee: Coffee,
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
    const [thisCoffee, setThisCoffee] = useState<Coffee>(coffee)
    const [formattedPrice, setFormattedPrice] = useState<string>('')
    const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)

    useEffect(() => {
        const currentCoffee = thisCoffee
        const currentCoffeePrice = currentCoffee.coffeePrice

        const priceToDecimal = currentCoffeePrice.toFixed(2)

        setFormattedPrice(priceToDecimal)
    }, [thisCoffee])

    function handleCounterSum() { setCoffeeQuantity(state => state + 1) }
    function handleCounterSub() { setCoffeeQuantity(state => state - 1) }

    return (
        <CoffeeItemContainer>
            <img src={coffee.imagePath} alt={coffee.coffeeName} />

            <div className="traits">
                {coffee.traits.map((trait) => {
                    return (
                        <span key={trait.id}>{trait.title}</span>
                    )
                })}
            </div>

            <h3>{coffee.coffeeName}</h3>

            <p>{coffee.coffeeDescription}</p>

            <footer>
                <span className="price">R$<strong>{formattedPrice}</strong></span>

                <div className="counter">
                    <button onClick={handleCounterSub}>
                        <Minus size={14} weight="bold" />
                    </button>
                    <span>{coffeeQuantity}</span>
                    <button onClick={handleCounterSum}>
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