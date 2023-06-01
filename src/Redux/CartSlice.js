import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state, action)=> {
      console.log(action.payload)
      state.cartItems.push(action.payload)
      console.log(state.cartItems)
      
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // if (itemIndex === -1) {
      //   const tempItem = { ...action.payload, itemQuantity: 1 };
      //   state.cartItems.push(tempItem);
      // } else {
      //   state.cartItems[itemIndex].itemQuantity += 1;
      // }
    },

    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].itemQuantity > 1) {
          state.cartItems[itemIndex].itemQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },

    deleteCartItem(state, action) {
    
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log()
      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    },

    addToWishList(state, action) {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishList.splice(itemIndex, 1);
      } else {
        const tempItem = { ...action.payload };
        state.wishList.push(tempItem);
      }
    },

    removeFromWishList(state, action) {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishList.splice(itemIndex, 1);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteCartItem,
  addToWishList,
  removeFromWishList,
} = cartSlice.actions;
export const cartSelector=(state => state.cart.cartItems)

export default cartSlice.reducer;
