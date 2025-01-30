import { useContext, useState } from "react"
import { CoffeeItem } from "../../../../components/CoffeeItem"
import { CoffeesContext } from "../../../../contexts/CoffeesContext"
import { CartContainer } from "./styles"

export function CartWrapper() {
    const [somePriceHasChanged, setSomePriceHasChanged] = useState<boolean>(false)

    const { coffeesInCart, formatPrice } = useContext(CoffeesContext)

    const sumItemsPrice = coffeesInCart.reduce((sumPrice, coffeeItem) => sumPrice + (coffeeItem.coffeePrice * coffeeItem.coffeeQuantity), 0)
    const totalItemsPriceFormatted = formatPrice(sumItemsPrice)

    const deliveryPrice = 29.70
    const deliveryPriceFormatted = formatPrice(deliveryPrice)

    const orderTotalPrice = sumItemsPrice + deliveryPrice
    const orderTotalPriceFormatted = formatPrice(orderTotalPrice)


    return (
        <aside>
            <h2>Cafés selecionados</h2>
            <CartContainer>
                <ul>
                    {coffeesInCart.map((coffee) => {
                        return (
                            <>
                                <CoffeeItem key={coffee.id} coffee={coffee} isItOnShoppingCart somePriceHasChanged={somePriceHasChanged} setSomePriceHasChanged={setSomePriceHasChanged} />
                                <div className="divisor"></div>
                            </>
                        )
                    })}
                </ul>

                <footer className="footer">
                    <div>
                        <span>Total de itens</span>
                        <span>R$ {totalItemsPriceFormatted}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>R$ {deliveryPriceFormatted}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {orderTotalPriceFormatted}</span>
                    </div>

                    <button className="confirm" type="submit" form="form-adress">
                        Confirmar pedido
                    </button>
                </footer>
            </CartContainer>

        </aside>
    )
}