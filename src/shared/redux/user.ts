import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserSlice {
	name: string | null;
	token: string | null;
	profile: string | null;
	user: string | null;
}

const initialState: UserSlice = {
	name: localStorage.getItem("name") || null,
	token: localStorage.getItem("token") || null,
	profile: localStorage.getItem("profile") || null,
	user: localStorage.getItem("user") || null,
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

			action.payload.token && localStorage.setItem("token", action.payload.token);
			action.payload.user && localStorage.setItem("user", action.payload.user);
			action.payload.name && localStorage.setItem("name", action.payload.name);
			action.payload.profile && localStorage.setItem("profile", action.payload.profile);

		},
		removeUser: (state: UserSlice) => {
			state.name = null;
			state.token = null;
			state.profile = null;
			state.user = null;

			localStorage.removeItem("token");
			localStorage.removeItem("user");
			localStorage.removeItem("name");
			localStorage.removeItem("token");

		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
