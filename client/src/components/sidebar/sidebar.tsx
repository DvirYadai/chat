import styled, { css } from 'styled-components';
import { GroupIcon, MessageIcon, PhoneIcon, SettingsIcon } from '../../styles/icons';
import { Box, Flex, Svg } from '../ui';
import { Chats } from './chats';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { switchSidebarView } from '../../slices/userSlice';

export const StyledSvg = styled(Svg)<{ isActive?: boolean }>`
  ${({ isActive }) => css`
    cursor: pointer;
    &:hover {
      path {
        fill: url(#myGradient);
      }
    }
    ${isActive &&
    `
    path {
      fill: url(#myGradient);
    }
    `}
  `}
`;

const sidebarMenuIconsMap = {
  chats: MessageIcon,
  calls: PhoneIcon,
  groups: GroupIcon,
  settings: SettingsIcon,
};

function Menu() {
  const { activeSidebarMenuItem } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      boxShadow="10px 0px 30px -10px rgba(0,0,0,0.3)"
      height="65px"
      bg="main.white"
      p="0 10px"
    >
      {Object.entries(sidebarMenuIconsMap).map(([key, icon]) => {
        const isActive = activeSidebarMenuItem === key;
        return <StyledSvg onClick={() => dispatch(switchSidebarView(key))} isActive={isActive} key={key} as={icon} />;
      })}
    </Flex>
  );
}

const sidebarMenuItemsMap = {
  chats: <Chats />,
  calls: <>calls</>,
  groups: <>groups</>,
  settings: <>settings</>,
};

export function Sidebar() {
  const { activeSidebarMenuItem } = useAppSelector((state) => state.user);

  return (
    <Box width="325px" bg="#f8fafc">
      <Menu />
      {sidebarMenuItemsMap[activeSidebarMenuItem]}
    </Box>
  );
}
