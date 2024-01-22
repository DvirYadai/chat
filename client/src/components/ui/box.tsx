import styled from 'styled-components';
import {
	space,
	layout,
	typography,
	color,
	FontSizeProps,
	SpaceProps,
	LayoutProps,
	TypographyProps,
	ColorProps,
} from 'styled-system';

type BoxProps = FontSizeProps & SpaceProps & LayoutProps & TypographyProps & ColorProps;

export const Box = styled.div<BoxProps>`
	${space}
	${layout}
    ${typography}
    ${color}
`;
