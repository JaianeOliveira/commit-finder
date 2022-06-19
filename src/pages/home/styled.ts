import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const StyledInput = styled(TextField)({
	'& label.Mui-focused': {
		color: '#D6D6D6',
	},
	'& label': {
		color: '#D6D6D6',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#D6D6D6',
	},
	'& .MuiOutlinedInput-root': {
		width: 400,
		color: '#D6D6D6',
		'& fieldset': {
			borderColor: '#D6D6D6',
		},
		'&:hover fieldset': {
			borderColor: '#D6D6D6',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#D6D6D6',
		},
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
