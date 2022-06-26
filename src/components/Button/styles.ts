import styled from 'styled-components';

export const StyledButton = styled.button<{
	buttonType?: 'normal' | 'flat' | 'inline';
	buttonColor?: string | 'black' | 'gray' | 'white';
	color?: string;
	disabled?: boolean;
}>`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: ${(props) =>
		props.buttonType === 'inline' ? '5px 0' : '10px 20px'};
	gap: 10px;

	border: none;
	box-shadow: ${(props) =>
		props.buttonType === 'inline'
			? 'none'
			: '0px 1px 5px 1px rgba(0, 0, 0, 0.25)'};
	border-radius: 5px;

	min-width: 110px;

	height: ${(props) => {
		switch (props.buttonType) {
			case 'normal':
				return '50px';
			case 'flat':
				return '40px';
			case 'inline':
				return '30px';
			default:
				return '50px';
		}
	}};

	color: ${(props) => {
		if (props.color) return props.color;
		if (props.buttonType === 'inline') return props.theme.gray_2;
		switch (props.buttonColor) {
			case 'black':
				return props.theme.white;
			case 'gray':
				return props.theme.white;
			case 'white':
				return props.theme.gray_1;
			default:
				return props.theme.gray_1;
		}
	}};

	font-weight: 600;

	background-color: ${(props) => {
		if (props.buttonType === 'inline') return 'transparent';
		switch (props.buttonColor) {
			case 'black':
				return props.theme.black;
			case 'gray':
				return props.theme.gray_1;
			case 'white':
				return '#FEFEFE';
			default:
				return props.theme.black;
		}
	}};

	cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};

	&:hover {
		box-shadow: ${(props) =>
			props.buttonType === 'inline'
				? 'none'
				: `0px 1px ${
						props.buttonColor === 'white' ? '8px' : '10px'
				  } 1px rgba(0,0,0,0.25)`};
	}
`;
