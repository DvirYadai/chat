import React, { ReactElement, SVGProps } from 'react';
import styled from 'styled-components';
import { LayoutProps, SpaceProps, layout, space } from 'styled-system';

interface SvgProps extends SVGProps<SVGSVGElement> {
  as?: React.ComponentType<SVGProps<SVGSVGElement>> | 'svg';
}

export const Svg = styled(({ as: Component = 'svg', ...props }: SvgProps & LayoutProps & SpaceProps): ReactElement => {
  return <Component {...props} />;
})`
  ${space}
  ${layout}
`;
