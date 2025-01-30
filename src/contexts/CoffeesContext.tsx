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

interface CoffeesContextType {
    coffees: Coffee[],
    coffeesInCart: Coffee[],
    setCoffeesInCart: Dispatch<SetStateAction<Coffee[]>>,
    formatPrice: (value: number) => string
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffees, setCoffees] = useState<Coffee[]>(CoffeeListData)
    const [coffeesInCart, setCoffeesInCart] = useState<Coffee[]>([])

    function formatPrice(value: number): string {
        return value.toFixed(2).replace('.', ',')
    }

    return (
        <CoffeesContext.Provider value={{ coffees, coffeesInCart, setCoffeesInCart, formatPrice }}>
            {children}
        </CoffeesContext.Provider>
    )
}