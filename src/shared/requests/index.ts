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

export const getRepoContributors = async (
	token: string,
	link: string,
	setRepos: (data: any) => void
) => {
	const data = await axios.get(
		`https://api.github.com/repos/${link}/contributors`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: ' application/vnd.github.v3+json',
				Authorization: `token ${token}`,
			},
		}
	);

	console.log(data);

	if (data.status === 200) {
		setRepos(data.data);
		return true;
	}

	return false;
};

export const getCommits = async (params: {
	repo: string;
	token: string;
	contributor: string;
	since: string;
	until: string;
}) => {
	const data = await axios.get(
		`https://api.github.com/repos/${params.repo}/commits`,
		{
			params: {
				author: params.contributor.toLocaleLowerCase(),
				since: params.since,
				until: params.until,
				sha: '720b2156c7621619e71319e66387ab3c9f7bc45b',
			},
			headers: {
				'Content-Type': 'application/json',
				Accept: ' application/vnd.github.v3+json',
				Authorization: `token ${params.token}`,
			},
		}
	);
	console.log(data);
	if (data.status === 200) {
		return data.data;
	}

	return false;
};

export const getBranches = async (
	token: string,
	repo: string,
	setBranches: (data: any) => void
) => {
	const data = await axios.get(
		`https://api.github.com/repos/${repo}/branches`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: ' application/vnd.github.v3+json',
				Authorization: `token ${token}`,
			},
		}
	);

	console.log(data);

	if (data.status === 200) {
		setBranches(data.data);
		return data.data.length
			? data.data.map((item: any) => ({
					name: item.name,
					sha: item.commit.sha,
			  }))
			: [];
	}

	return false;
};

export const getSha = async (token: string, repo: string, branch: string) => {
	const data = await axios.get(
		`https://api.github.com/repos/${repo}/branches/${branch}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: ' application/vnd.github.v3+json',
				Authorization: `token ${token}`,
			},
		}
	);

	if (data.status === 200) {
		console.log(data.data);
		return data.data;
	}

	return false;
};
