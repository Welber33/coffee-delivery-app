import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/components/CoffeeCard";
import { produce } from "immer";


export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
  cartQuantity: number;
  totalCartItems: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const totalCartItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistesInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (coffeeExistesInCart >= 0) {
        const item = draft[coffeeExistesInCart];
        draft[coffeeExistesInCart].quantity = type === 'increase'
          ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistesInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (coffeeExistesInCart >= 0) {
        draft.splice(coffeeExistesInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function cleanCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        totalCartItems,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}