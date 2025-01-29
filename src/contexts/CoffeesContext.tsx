import { createContext, ReactNode, useState } from "react";
import { CoffeeListData } from "../utils";

interface CoffeeTrait {
    id: number,
    title: string
}

interface Coffee {
    id: number,
    imagePath: string,
    coffeeName: string,
    coffeeDescription: string,
    coffeePrice: number,
    traits: CoffeeTrait[]
}

interface CoffeesContextType {
    coffees: Coffee[],
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffees, setCoffees] = useState<Coffee[]>(CoffeeListData)

    return (
        <CoffeesContext.Provider value={{ coffees }}>
            {children}
        </CoffeesContext.Provider>
    )
}