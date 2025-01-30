import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { PaymentFormContainer } from "./styles";

export function PaymentForm() {
    const { paymentMethod, setPaymentMethod } = useContext(CoffeesContext)

    function handlePaymentMethodSelect(method: string) {
        setPaymentMethod(method)
    }

    return (
        <PaymentFormContainer>
            <header>
                <h3>
                    <CurrencyDollar size={22} />
                    Pagamento
                </h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </header>

            <footer>
                <button
                    className={`${paymentMethod === 'Cartão de crédito' && 'active'}`}
                    onClick={() => handlePaymentMethodSelect('Cartão de crédito')}
                >
                    <CreditCard size={16} />
                    Cartão de crédito
                </button>

                <button
                    className={`${paymentMethod === 'Cartão de débito' && 'active'}`}
                    onClick={() => handlePaymentMethodSelect('Cartão de débito')}
                >
                    <Bank size={16} />
                    Cartão de débito
                </button>

                <button
                    className={`${paymentMethod === 'Dinheiro' && 'active'}`}
                    onClick={() => handlePaymentMethodSelect('Dinheiro')}
                >
                    <Money size={16} />
                    Dinheiro
                </button>
            </footer>
        </PaymentFormContainer>
    )
}