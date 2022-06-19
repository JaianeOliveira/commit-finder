import axios from 'axios';

export const getUser = async (token: string, setUser: (data: any) => void) => {
	const data = await axios.get(`https://api.github.com/user`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: ' application/vnd.github.v3+json',
			Authorization: `token ${token}`,
		},
	});

	console.log(data);

	if (data.status === 200) {
		setUser(data.data);
		return true;
	}

	return false;
};
