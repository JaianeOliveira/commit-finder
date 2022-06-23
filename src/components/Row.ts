import styled from 'styled-components';

const Row = styled.div<{ align?: string; gap?: number }>`
	width: 100%;
	margin: 1vh 0;
	display: flex;
	align-items: center;
	justify-content: ${(props) => {
		switch (props.align) {
			case 'center':
				return 'center';
			case 'start':
				return 'flex-start';
			case 'end':
				return 'flex-end';
			case 'between':
				return 'space-between';
			case 'around':
				return 'space-around';
			case 'evenly':
				return 'space-evenly';
			default:
				return 'center';
		}
	}};

	gap: ${(props) => (props.gap ? props.gap + 'px' : '10px')};
`;

export default Row;
