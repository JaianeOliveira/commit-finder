import axios from 'axios';

export const getUser = async (token: string, setUser: (data: any) => void) => {
	const data = await axios.get(`https://api.github.com/user`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: ' application/vnd.github.v3+json',
			Authorization: `token ${token}`,
		},
	});

	if (data.status === 200) {
		setUser({
			name: data.data.name,
			token: token,
			profile: data.data.html_url,
			user: data.data.login,
		});
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

	if (data.status === 200) {
		setRepos(data.data.map((item: any) => item.login));
		return true;
	}

	return false;
};

export const getCommits = async (
	params: {
		repo: string;
		contributor: string;
		since: string;
		until: string;
		sha: string;
	},
	token: string
) => {
	const data = await axios.get(
		`https://api.github.com/repos/${params.repo}/commits`,
		{
			params: {
				author: params.contributor,
				since: params.since,
				until: params.until,
				sha: params.sha,
			},
			headers: {
				'Content-Type': 'application/json',
				Accept: ' application/vnd.github.v3+json',
				Authorization: `token ${token}`,
			},
		}
	);
	if (data.status === 200) {
		console.log(data);
		return data.data.length
			? data.data.map((commit: any) => ({
					message: commit.commit.message,
					url: commit.html_url,
			  }))
			: [];
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

	if (data.status === 200) {
		setBranches(
			data.data.length
				? data.data.map((item: any) => ({
						name: item.name,
						sha: item.commit.sha,
				  }))
				: []
		);
		return true;
	}

	return false;
};

export const getCommitsInAllBranches = async (
	branches: string[],
	params: {
		repo: string;
		contributor: string;
		since: string;
		until: string;
		sha: string;
	},
	setCommits: (data: any) => void,
	token: string
) => {
	branches.map(async (item) => {
		const data = await axios.get(
			`https://api.github.com/repos/${params.repo}/commits`,
			{
				params: {
					author: params.contributor,
					since: params.since,
					until: params.until,
					sha: item,
				},
				headers: {
					'Content-Type': 'application/json',
					Accept: ' application/vnd.github.v3+json',
					Authorization: `token ${token}`,
				},
			}
		);
		if (data.status === 200) {
			console.log(data);
			setCommits((currentData: { message: string; url: string }[]) => [
				...currentData,
				...data.data.map((item: any) => ({
					message: item.commit.message,
					url: item.html_url,
				})),
			]);
		}
	});
};
