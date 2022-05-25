import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list:[],
  orderIds: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.list = action.payload
      state.orderIds = action.payload
    },

    addOrder: (state, action) => {
      const id = action.payload;
      state.orderIds.push(id);
        const newOrder = action.payload;
        const updatedOrders = [
            ...state.list,
            newOrder
        ];

        state.list = updatedOrders;
    },

    removeOrder: (state, action) => {
        let id = action.payload
        state.orderIds = state.orderIds.filter(
          (orderId) => orderId !== id
      );
        let updatedOrderNumber = state.orderIds.filter(
            (order) => order.id !== id
        );  
        
        state.orderIds = updatedOrderNumber;

        let updatedOrderStatus = state.list.filter(
          (order) => order.id !== id
      );  
      
      state.list = updatedOrderStatus;
    }


  },
})

// Action creators are generated for each case reducer function
export const { setOrders, addOrder, removeOrder } = ordersSlice.actions

export default ordersSlice.reducer