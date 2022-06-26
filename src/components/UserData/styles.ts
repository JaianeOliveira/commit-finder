import styled from 'styled-components';

export const Container = styled.div`
	img {
		width: 50px;
		height: 50px;

		border-radius: 50px;
	}

	display: flex;
	align-items: center;

	gap: 12px;

	div * {
		margin-bottom: 0;
	}
`;
