import React from 'react';
import { useAppSelector } from './hooks/useRedux';

import Home from './pages/home';
import Login from './pages/login';

const App = () => {
	const token = useAppSelector((store) => store.user.token);
	return <>{token ? <Home /> : <Login />}</>;
};

export default App;
