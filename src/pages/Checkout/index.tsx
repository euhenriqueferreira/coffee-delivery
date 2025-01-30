import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "phosphor-react";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as zod from 'zod';
import { AddressType, CoffeesContext } from "../../contexts/CoffeesContext";
import { CartWrapper } from "./components/CartWrapper";
import { PaymentForm } from "./components/PaymentForm";
import { AddressFormContainer, CheckoutContainer } from "./styles";



const AddressFormValidationSchema = zod.object({
    cep: zod.string().length(8),
    street: zod.string().min(5).max(80),
    houseNumber: zod.string().min(1).max(5),
    extra: zod.string().nullable(),
    district: zod.string().min(3).max(80),
    city: zod.string().min(5).max(80),
    uf: zod.string().length(2),
})

type AddressFormValidationType = zod.infer<typeof AddressFormValidationSchema>

export function Checkout() {
    const { setUserAddressData, paymentMethod } = useContext(CoffeesContext)

    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddressFormValidationType>({
        resolver: zodResolver(AddressFormValidationSchema)
    });

    function handleFormSubmit(data: any) {
        const userAdressData: AddressType = data

        setUserAddressData(userAdressData)

        reset()

        if (paymentMethod) {
            navigate('/thanks')
        }
    }

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

                    <form action="" id="form-adress" onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="input-wrapper">
                            <input type="text" placeholder="CEP" {...register('cep')} className={`${errors.cep ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Rua" {...register('street')} className={`${errors.street ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Number" {...register('houseNumber')} className={`${errors.houseNumber ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Complemento" {...register('extra')} className={`${errors.extra ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Bairro" {...register('district')} className={`${errors.district ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Cidade" {...register('city')} className={`${errors.city ? 'error' : ''}`} />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="UF" {...register('uf')} className={`${errors.uf ? 'error' : ''}`} />
                        </div>
                    </form>
                </AddressFormContainer>

                <PaymentForm />
            </div>
            <CartWrapper />
        </CheckoutContainer>
    )
}