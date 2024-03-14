import { ADDTOCART } from "./actionType"

const initialState = {
    cart:[]
}

export const cartreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTOCART:
    const x=state.cart.find(e=>e.product.id===payload.product.id)
    if (x ){
        return { ...state, cart:state.cart.map(e=> e.product.id===payload.product.id ?{...e,quantity:e.quantity+=payload.quantity } : e.quantity) }
    }
    else {
        return { ...state, cart:[...state.cart,payload] }
    }
    

  default:
    return state
  }
}
