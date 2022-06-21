import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const Row = styled.div`
	display: flex;
	gap: 14px;
	flex-wrap: wrap;
`;

export const StyledInput = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		width: 400,
	},
});

export const Title = styled.h1`
	font-size: 2.8rem;
	font-weight: 600;
	margin-bottom: 2vh;
`;

export const Description = styled.p`
	max-width: 600px;
	text-align: center;
	font-size: 1.4rem;

	margin-bottom: 1vh;

	color: ${(props) => props.theme.textSecondary};

	a {
		font-weight: bold;
	}
`;
