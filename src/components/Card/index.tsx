import React, { ReactNode } from 'react';
import { StyledCard } from './styles';

type CardProps = {
	children: ReactNode | ReactNode[];
	styles?: {
		width?: string;
		height?: string;
		align?: 'center' | 'end' | 'start';
		justify?: 'center' | 'end' | 'start' | 'evenly' | 'around' | 'between';
		gap?: number;
		padding?: string;
	};
};

const Card = ({ children, styles }: CardProps) => {
	return (
		<StyledCard
			width={styles?.width}
			height={styles?.height}
			align={styles?.align}
			justify={styles?.justify}
			gap={styles?.gap}
			padding={styles?.padding}
		>
			{children}
		</StyledCard>
	);
};

export default Card;
