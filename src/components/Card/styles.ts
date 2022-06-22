import styled from 'styled-components';

export const StyledCard = styled.div<{
	width?: string;
	height?: string;
	align?: 'center' | 'end' | 'start';
	justify?: 'center' | 'end' | 'start' | 'evenly' | 'around' | 'between';
	gap?: number;
	padding?: string;
}>`
	padding: ${(props) => (props.padding ? props.padding : '5vh')};

	min-height: 40vh;
	min-width: 30vw;

	border: 1px solid ${(props) => props.theme.gray_1};
	border-radius: 5px;

	width: ${(props) => (props.width ? props.width : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};

	display: flex;
	align-items: ${(props) => {
		switch (props.align) {
			case 'center':
				return 'center';
			case 'end':
				return 'flex-end';
			case 'start':
				return 'flex-start';
			default:
				return 'center';
		}
	}};

	justify-content: ${(props) => {
		switch (props.justify) {
			case 'center':
				return 'center';
			case 'start':
				return 'flex-start';
			case 'end':
				return 'flex-end';
			case 'around':
				return 'space-around';
			case 'evenly':
				return 'space-evenly';
			case 'between':
				return 'space-between';
			default:
				return 'center';
		}
	}};

	gap: ${(props) => (props.gap ? props.gap + 'px' : '5px')};
`;
