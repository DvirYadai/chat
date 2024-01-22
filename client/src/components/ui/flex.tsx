import styled from 'styled-components';
import { Box } from './box';

interface FlexProps {
	display?: string;
}

export const Flex = styled(Box).attrs<FlexProps>({ display: 'flex' });
