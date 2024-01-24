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
  flexbox,
  FlexboxProps,
  borders,
  BordersProps,
  position,
  PositionProps,
  opacity,
  OpacityProps,
} from 'styled-system';

type BoxProps = FontSizeProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps &
  BordersProps &
  PositionProps &
  OpacityProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
    ${typography}
    ${color}
    ${flexbox}
    ${borders}
    ${position}
    ${opacity}
`;