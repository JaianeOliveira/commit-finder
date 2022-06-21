import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserSlice {
	name: string | null;
	token: string | null;
	profile: string | null;
	user: string | null;
}

const initialState: UserSlice = {
	name: null,
	token: null,
	profile: null,
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: UserSlice, action: PayloadAction<UserSlice>) => {
			state.name = action.payload.name;
			state.token = action.payload.token;
			state.profile = action.payload.profile;
			state.user = action.payload.user;
		},
		removeUser: (state: UserSlice) => {
			state.name = null;
			state.token = null;
			state.profile = null;
			state.user = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
