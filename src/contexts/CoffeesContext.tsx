import { createContext, useState, ReactNode } from 'react'
import { Coffee, coffees as coffeesData } from '../data/coffees'

interface CoffeesContextType {
  coffees: Coffee[]
}

interface CoffeesProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees] = useState<Coffee[]>(coffeesData)

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
