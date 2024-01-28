import styled, { css } from 'styled-components';
import { SearchIcon } from '../../styles/icons';
import { Svg } from './svg';
import { Flex } from './flex';

const Container = styled(Flex)`
  ${({ theme }) => css`
    align-items: center;
    padding: 6px 10px;
    border-radius: 15px;
    background: ${theme.colors.main.white};
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.3);

    input {
      flex: 1;
      border: none;
      outline: 0;

      &::placeholder {
        font-size: 12px;
        font-weight: 600;
        color: #b0b7bf;
      }
    }
  `}
`;

export function SearchBar() {
  return (
    <Container>
      <Svg as={SearchIcon} pr="6px" />
      <input placeholder="Search" />
    </Container>
  );
}
