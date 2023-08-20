import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../data/coffees'

interface CartItem {
  coffee: Coffee
  amount: number
}

interface CartContextType {
  items: CartItem[]
  //   addItem: () => void
  //   emptyCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartProviderProps) {
  const [items /*, setItems */] = useState<CartItem[]>([])

  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  )
}
