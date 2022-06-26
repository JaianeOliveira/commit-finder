import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;

	border: 1px solid ${(props) => props.theme.gray_2};
	border-radius: 5px;

	padding: 18px 22px;

	box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.15);

	.commitArea {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;

		gap: 7px;

		strong {
			color: ${(props) => props.theme.gray_1};
		}
		p {
			margin-bottom: 0;
			color: ${(props) => props.theme.gray_1};
		}
	}

	.buttonsArea {
		display: flex;
		gap: 13px;

		font-size: 20px;
		button {
			background: transparent;
			padding: 0 7px;
			border: none;
			cursor: pointer;
			color: ${(props) => props.theme.gray_3};
		}

		button:hover {
			* {
				color: ${(props) => props.theme.gray_2};
				transition-property: color, background-color, border-color,
					text-decoration-color, fill, stroke;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
			}
		}

		button:active {
			* {
				color: ${(props) => props.theme.gray_2};
				transition-property: color, background-color, border-color,
					text-decoration-color, fill, stroke;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 150ms;
			}
		}
	}
`;
