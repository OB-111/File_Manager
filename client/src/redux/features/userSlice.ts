import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userModel } from "../models/user.model";

const initialState: userModel = {
  u_id: '',
  u_name:''
}

const userSlice = createSlice({
    name:'users',
    initialState:initialState,
    
    // actions to change the state
    reducers:{
      onLogin: (state, action: PayloadAction<userModel>) =>{
        state.u_id =action.payload.u_id;
        state.u_name =action.payload.u_name;
      }, 

    }
})

export const {
  onLogin,
} = userSlice.actions;
export default userSlice.reducer;