
import { createSlice } from "@reduxjs/toolkit"
import { fetchAddressByGeolocation } from "../features/user/geolocationSlice";

const initialState = {
  username: 'hola',
  status: 'idle',
  position: {},
  address: '',
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAddressByGeolocation.pending, (state) => { state.status = "loading" }
      )
      .addCase(
        fetchAddressByGeolocation.fulfilled, (state, action) => {
          state.position = action.payload.position,
            state.address = action.payload.address,
            state.status = "idle"
        }
      ).addCase(
        fetchAddressByGeolocation.rejected, (state, action) => {
          state.error = action.error.message,
            state.status = "error"
        }
      )
    
  }
});

export const { updateName } = userSlice.actions
export default userSlice.reducer