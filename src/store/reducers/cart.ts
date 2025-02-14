import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio } from "../../components/PerfilComponents/Apresentacao";

interface CartItem extends Cardapio {
  price?: string;
  quantity?: number;
}

type CartState = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalValue: number;
  isVisible: boolean;
};

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalValue: 0,
  isVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!item) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        alert("Você já adicionou este item ao carrinho");
      }

      state.totalQuantity += 1;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.totalQuantity -= 1;
    },
    openSideBar: (state) => {
      state.isVisible = !state.isVisible;
    },
    close: (state) => {
      state.isVisible = false;
    },
    clear: (state) => {
      state.cartItems = []
    }
  },
});

export const { add, remove, openSideBar, close, clear } = cartSlice.actions;
export default cartSlice.reducer;
