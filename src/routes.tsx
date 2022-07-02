import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/useRedux';
import Find from './pages/find';
import Login from './pages/login';

const Router = () => {
	const token = useAppSelector((state) => state.user.token);
	return (
		<Routes>
				<Route
					path="/"
					element={!token ? <Navigate to="/login" replace /> : <Find />}
				/>
				<Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />} />
		</Routes>
	);
};

export default Router;
