import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useContext } from 'react';
import successIllustration from '../../assets/success.svg';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import { SuccessContainer } from "./styles";

export function Success() {
    const { userAddressData, paymentMethod } = useContext(CoffeesContext)

    const street = userAddressData && userAddressData.street
    const number = userAddressData && userAddressData.houseNumber
    const district = userAddressData && userAddressData.district
    const city = userAddressData && userAddressData.city
    const uf = userAddressData && userAddressData.uf


    return (
        <SuccessContainer>
            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <section>
                <div className='infos-wrapper'>
                    <ul>
                        <li>
                            <div>
                                <MapPin size={16} weight='fill' />
                            </div>
                            <p>
                                <span>
                                    Entrega em <strong>{street}, {number}</strong>
                                </span>
                                <span>
                                    {district} - {city}, {uf}
                                </span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <Clock size={16} weight='fill' />
                            </div>
                            <p>
                                <span>
                                    Previsão de entrega
                                </span>
                                <span>
                                    <strong>20 min - 30 min</strong>
                                </span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <CurrencyDollar size={16} weight='fill' />
                            </div>
                            <p>
                                <span>
                                    Pagamento na entrega
                                </span>
                                <span>
                                    <strong>{paymentMethod}</strong>
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <img src={successIllustration} />
            </section>
        </SuccessContainer >
    )
}