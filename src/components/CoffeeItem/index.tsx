import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { Coffee, CoffeesContext } from "../../contexts/CoffeesContext"

import { CoffeeItemCart, CoffeeItemContainer } from "./styles"


interface CoffeeItemProps {
    coffee: Coffee,
    isItOnShoppingCart?: boolean,
}

export function CoffeeItem({ coffee, isItOnShoppingCart }: CoffeeItemProps) {
    const [coffeeQuantity, setCoffeeQuantity] = useState<number>(coffee.coffeeQuantity)

    const { coffeesInCart, setCoffeesInCart, formatPrice } = useContext(CoffeesContext)

    const thisCoffee: Coffee = coffee

    const currentCoffeePrice = thisCoffee.coffeePrice * coffeeQuantity
    const priceFormatted = formatPrice(currentCoffeePrice)

    function handleCounterSum() { setCoffeeQuantity(state => state + 1) }
    function handleCounterSub() {
        if (coffeeQuantity > 1) {
            setCoffeeQuantity(state => state - 1)
        }
    }

    function handleAddCoffeeToCart() {
        const coffeeWithQuantity = { ...thisCoffee, coffeeQuantity: coffeeQuantity }
        setCoffeesInCart(state => ([...state, coffeeWithQuantity]))
    }

    function handleRemoveCoffeeFromCart() {
        const cartWithoutRemovedCoffee = coffeesInCart.filter((coffee) => coffee.id !== thisCoffee.id)
        setCoffeesInCart(cartWithoutRemovedCoffee)
    }

    return isItOnShoppingCart ? (
        <CoffeeItemCart>
            <img src={coffee.imagePath} alt={coffee.coffeeName} />
            <div>
                <header>
                    <h3>{coffee.coffeeName}</h3>
                    <span>R$ {priceFormatted}</span>
                </header>
                <footer>
                    <div className="counter">
                        <button onClick={handleCounterSub}>
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>{coffeeQuantity}</span>
                        <button onClick={handleCounterSum}>
                            <Plus size={14} weight="bold" />
                        </button>
                    </div>

                    <button className="removeItem" onClick={handleRemoveCoffeeFromCart}>
                        <Trash size={16} />
                        Remover
                    </button>
                </footer>
            </div>
        </CoffeeItemCart>
    ) : (
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
                <span className="price">R$<strong>{priceFormatted}</strong></span>

                <div className="counter">
                    <button onClick={handleCounterSub}>
                        <Minus size={14} weight="bold" />
                    </button>
                    <span>{coffeeQuantity}</span>
                    <button onClick={handleCounterSum}>
                        <Plus size={14} weight="bold" />
                    </button>
                </div>
                <button className="cart" onClick={handleAddCoffeeToCart}>
                    <ShoppingCart size={22} weight="fill" />
                </button>
            </footer>
        </CoffeeItemContainer>
    )
}