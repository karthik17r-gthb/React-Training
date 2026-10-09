import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

export const { updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
