import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio } from "../../components/PerfilComponents/Apresentacao";

interface cartItem extends Cardapio {
    price?: string
    quantity?: number
}

type cartState = {
    cartItems: cartItem[]
    totalQuantity: number
    id?: number
    totalValue: number
    isVisible: boolean
}

const initialState: cartState = {
    cartItems: [],
    totalQuantity: 0,
    totalValue: 0,
    isVisible: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<cartItem>) => {
        const item = state.cartItems.find((item) => item.id === action.payload.id)

        if (!item) {
            state.cartItems.push({...action.payload, quantity: 1})
        } else {
            alert('Você já adicionou este item ao carrinho')
        }

        state.totalQuantity += 1
    },
    remove: (state, action: PayloadAction<number>) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)

        state.totalQuantity -= 1
    },
    openSideBar: (state) => {
        state.isVisible = !state.isVisible
    },
    close: (state) => {
        state.isVisible = false
    },
  }
});

export const { add, remove, openSideBar, close } = cartSlice.actions
export default cartSlice.reducer