import axios from 'axios';

export const get = async (route: string) => {
	const data = await axios.get(`https://api.github.com/${route}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: ' application/vnd.github.v3+json',
			Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
		},
	});

	return data;
};
