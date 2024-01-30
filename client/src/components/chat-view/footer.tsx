import styled from 'styled-components';
import { PaperclipIcon, PaperplaneIcon, SmileIcon } from '../../styles/icons';
import { Flex, Svg } from '../ui';
import { StyledSvg } from '../sidebar/sidebar';

const StyledInput = styled.input`
  background: transparent;
  outline: 0;
  border: none;
  font-size: 14px;
  flex: 1;
  margin: 0 10px;

  &::placeholder {
    font-weight: 500;
    color: #b0b7bf;
  }
`;

const StyledSendButtonContainer = styled(Flex)`
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(114, 65, 233, 1) 0%, rgba(180, 53, 245, 1) 65%);
`;

export function Footer() {
  return (
    <Flex p="10px 25px" height="40px" boxShadow="0px 10px 30px -10px rgba(0,0,0,0.3)">
      <Flex pl="20px" alignItems="center" borderRadius="35px" width="100%" bg="#f8fafc">
        <Svg cursor="pointer" as={PaperclipIcon} />
        <StyledInput placeholder="Type a message here..." />
        <StyledSvg cursor="pointer" as={SmileIcon} />
        <StyledSendButtonContainer>
          <Svg as={PaperplaneIcon} />
        </StyledSendButtonContainer>
      </Flex>
    </Flex>
  );
}
