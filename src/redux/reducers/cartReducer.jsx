import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        addcart: (state, { payload }) => {
        

            const exist = state.cart.find((item) => {
                return item._id === payload._id
            })

            if (exist) {

                console.log("if exist");
                console.log("payload qte ="+ payload.qte);
                const newcart=state.cart.map((item) => {
                    if (item._id === payload._id) {
                        
                        item.qte++
                        console.log('====================================');
                        console.log("item qte: "+item.qte);
                        console.log('====================================');
                    }  return item
                })
                void(state.cart=newcart)
                return state
            }

            return { ...state, cart: [...state.cart, {...payload,qte:1}] };
        },
        removecart: (state, { payload }) => {
            return {
                ...state, cart: state.cart.filter((item) => {
                    return item._id !== payload
                })
            }
        },
        pluscart: (state, { payload }) => {
                
                 state.cart= state.cart.map((item) => {
                    if (item._id === payload) {

                        return {...item,qte:item.qte+1} 
                        
                    } return item
                })
            
        },
        minuscart: (state, { payload }) => {

                if (payload.qte===1) {
                     state.cart=state.cart.filter((item) => {
                        return item._id !== payload._id
                    })
                } else {
                    state.cart= state.cart.map((item) => {
                        if (item._id === payload._id) {
    
                            return {...item,qte:item.qte-1} 
                        } return item
                    })
                }
          
        },
        totalamount: (state, { payload }) => {
            
            return {
                ...state, total: state.cart.reduce((previous, current) => {
                    return (previous + current.price * current.qte)
                }, 0)
            }
        }
    }
});


export const { addcart, removecart, totalamount ,pluscart,minuscart } = cartSlice.actions;
export default cartSlice.reducer;