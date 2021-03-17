const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const initialState = null

const cartReducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state
    }
}

const removeFromCart = (id) => ({type: REMOVE_FROM_CART, id})
