import { MapPin } from "phosphor-react";
import { CartWrapper } from "./components/CartWrapper";
import { PaymentForm } from "./components/PaymentForm";
import { AddressFormContainer, CheckoutContainer } from "./styles";

export function Checkout() {


    return (
        <CheckoutContainer>
            <div>
                <h2>Complete seu pedido</h2>
                <AddressFormContainer>
                    <header>
                        <h3>
                            <MapPin size={22} />
                            Endereço de entrega
                        </h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </header>

                    <form action="">
                        <div className="input-wrapper">
                            <input type="text" name="cep" placeholder="CEP" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="street" placeholder="Rua" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="house-number" placeholder="Number" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="extra" placeholder="Complemento" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="district" placeholder="Bairro" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="city" placeholder="Cidade" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="uf" placeholder="UF" />
                        </div>
                    </form>
                </AddressFormContainer>

                <PaymentForm />
            </div>
            <CartWrapper />
        </CheckoutContainer>
    )
}