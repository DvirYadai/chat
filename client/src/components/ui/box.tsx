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
  shadow,
  ShadowProps,
  system,
  background,
  BackgroundProps,
} from 'styled-system';

const textOverflow = system({
  textOverflow: true,
  overflow: {
    property: 'overflow',
    scale: 'textOverflows',
  },
});

const whiteSpace = system({
  whiteSpace: true,
});

const float = system({
  float: true,
});

const gap = system({
  gap: true,
});

type BoxProps = FontSizeProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps &
  BordersProps &
  PositionProps &
  OpacityProps &
  ShadowProps &
  BackgroundProps & { textOverflow?: string; whiteSpace?: string; float?: string; gap?: string };

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
    ${typography}
    ${color}
    ${flexbox}
    ${borders}
    ${position}
    ${opacity}
    ${shadow}
    ${textOverflow}
    ${whiteSpace}
    ${float}
    ${background}
    ${gap}
`;
