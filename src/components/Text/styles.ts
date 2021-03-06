import styled from 'styled-components';

const StyledText = styled.p<{
	size?: number | 'normal' | 'medium' | 'large' | 'xlarge' | 'small' | 'xsmall';
	italic?: boolean;
	bold?: boolean;
	weight?:
		| 'normal'
		| 'extralight'
		| 'light'
		| 'thin'
		| 'bold'
		| 'semibold'
		| 'medium'
		| 'extrabold';
	underline?: boolean;
	color?: string;
	fontDisplay?: boolean;
}>`
	font-family: ${(props) =>
		props.fontDisplay ? 'Noto Sans Display' : 'Noto Sans'};
	font-size: ${({ size }) => {
		if (typeof size === 'number') return size + 'px';
		switch (size) {
			case 'normal':
				return '1.4rem';
			case 'medium':
				return '1.6rem';
			case 'large':
				return '1.8rem';
			case 'xlarge':
				return '2.4rem';
			case 'small':
				return '1.2rem';
			case 'xsmall':
				return '1rem';
			default:
				return '1.4rem';
		}
	}};

	font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
	font-weight: ${({ weight, bold }) => {
		if (bold) return 400;

		switch (weight) {
			case 'thin':
				return 100;
			case 'extralight':
				return 200;
			case 'light':
				return 300;
			case 'normal':
				return 400;
			case 'medium':
				return 500;
			case 'semibold':
				return 600;
			case 'bold':
				return 700;
			case 'extrabold':
				return 800;
			default:
				return 400;
		}
	}};

	text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
	color: ${(props) => {
		if (!!props.color && props.color.includes('#')) {
			return props.color;
		}
		switch (props.color) {
			case 'gray_1':
				return props.theme.gray_1;
			case 'gray_2':
				return props.theme.gray_2;
			case 'gray_3':
				return props.theme.gray_3;
			case 'black':
				return props.theme.black;
			case 'white':
				return props.theme.white;
			default:
				return props.theme.gray_2;
		}
	}};
`;

export default StyledText;
