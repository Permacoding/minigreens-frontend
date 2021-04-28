export const state = () => ({
    allProducts: [],
    cartItems:[],
})

export const getters = {
    allProducts: (state) => state.allProducts,
    nbCartItems: (state) => state.cartItems.length,
    getCart: (state) => state.cartItems,
   /*  getCartTotal: (state) =>
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b), */
}

export const mutations = {
  setProducts: (state, products) => (state.allProducts = products),
  /* setCartItem: (state, item) => state.cartItems.push(item),
  removeCartItem: (state, id) =>
    state.cartItems.splice(
      state.cartItems.findIndex((el) => el.id === id),
      1
    ), */
}
