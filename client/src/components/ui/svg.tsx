import React, { ReactElement, SVGProps } from 'react';

interface SvgProps extends SVGProps<SVGSVGElement> {
  as?: React.ComponentType<SVGProps<SVGSVGElement>> | 'svg';
}

export function Svg({ as: Component = 'svg', ...props }: SvgProps): ReactElement {
  return <Component {...props} />;
}
