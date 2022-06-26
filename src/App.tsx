import React from 'react';
import { useAppSelector } from './hooks/useRedux';

import Home from './pages/home';
import Login from './pages/login';
import Find from './pages/find';

const App = () => {
	const token = useAppSelector((store) => store.user.token);
	return <>{!token ? <Find /> : <Login />}</>;
};

export default App;
