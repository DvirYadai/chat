import styled from 'styled-components';
import { Box } from './box';

interface Props {
  display?: string;
}

export const Flex = styled(Box).attrs<Props>({ display: 'flex' })``;
