import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CoffeeListData } from "../utils";

interface CoffeeTrait {
    id: number,
    title: string
}

export interface Coffee {
    id: number,
    imagePath: string,
    coffeeName: string,
    coffeeDescription: string,
    coffeePrice: number,
    traits: CoffeeTrait[],
    coffeeQuantity: number,
}

export interface AddressType {
    cep: string,
    street: string,
    houseNumber: string,
    extra?: string,
    district: string,
    city: string,
    uf: string
}

interface CoffeesContextType {
    coffees: Coffee[],
    coffeesInCart: Coffee[],
    paymentMethod: string | null,
    userAddressData: AddressType | null
    setUserAddressData: Dispatch<SetStateAction<AddressType | null>>
    setPaymentMethod: Dispatch<React.SetStateAction<string | null>>
    setCoffeesInCart: Dispatch<SetStateAction<Coffee[]>>,
    formatPrice: (value: number) => string,
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffees, setCoffees] = useState<Coffee[]>(CoffeeListData)
    const [coffeesInCart, setCoffeesInCart] = useState<Coffee[]>([])

    const [paymentMethod, setPaymentMethod] = useState<string | null>('')

    const [userAddressData, setUserAddressData] = useState<AddressType | null>(null)

    function formatPrice(value: number): string {
        return value.toFixed(2).replace('.', ',')
    }

    return (
        <CoffeesContext.Provider
            value={{
                coffees,
                coffeesInCart,
                paymentMethod,
                userAddressData,
                setUserAddressData,
                setPaymentMethod,
                setCoffeesInCart,
                formatPrice
            }}>
            {children}
        </CoffeesContext.Provider>
    )
}