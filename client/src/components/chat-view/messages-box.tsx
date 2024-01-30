import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Box, Flex } from '../ui';

const MessageContainer = styled(Box)<{ isOwner?: boolean }>`
  ${({ theme, isOwner }) => css`
    margin-bottom: 5px;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[0]};
    background: ${isOwner ? '#e9eff5' : 'linear-gradient(90deg, rgba(114,65,233,1) 0%, rgba(180,53,245,1) 65%)'};
    color: ${isOwner ? '#353842' : '#fefdff'};
    ${!isOwner && 'float: right;'}
  `}
`;

function Message({ isOwner }: { isOwner?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alignItems="center"
      justifyContent="space-between"
    >
      {isOwner ? (
        <>
          <MessageContainer isOwner={isOwner}>hey man whats up? im good thanks</MessageContainer>
          <Box fontSize={1} fontWeight={0}>
            {isHovered && '3:43 PM'}
          </Box>
        </>
      ) : (
        <>
          <Box fontSize={1} fontWeight={0}>
            {isHovered && '3:43 PM'}
          </Box>
          <MessageContainer isOwner={isOwner}>hey man whats up? im good thanks</MessageContainer>
        </>
      )}
    </Flex>
  );
}

export function MessagesBox() {
  return (
    <Box height="calc(100% - 185px)" p="30px">
      <Message isOwner />
      <Message isOwner />
      <Message />
      <Message />
    </Box>
  );
}
