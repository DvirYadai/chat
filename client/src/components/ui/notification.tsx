import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { Flex } from './flex';
import { Svg } from './svg';
import { ErrorIcon, ExitIcon, InfoIcon, SuccessIcon, WarningIcon } from '../../styles/icons';
import { Box } from './box';
import { Text } from './text';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { NotificationType, hideNotification } from '../../slices/notificationSlice';
import { theme } from '../../styles';

const notificationTypeMap = {
  [NotificationType.Success as string]: {
    title: 'Success',
    color: theme.colors.main.success,
    icon: SuccessIcon,
  },
  [NotificationType.Error as string]: {
    title: 'Error',
    color: theme.colors.main.error,
    icon: ErrorIcon,
  },
  [NotificationType.Warning as string]: {
    title: 'Warning',
    color: theme.colors.main.warning,
    icon: WarningIcon,
  },
  [NotificationType.Info as string]: {
    title: 'Information',
    color: theme.colors.main.info,
    icon: InfoIcon,
  },
};

const Container = styled(Flex)<{ type: string }>`
  ${({ type }) => css`
    border: 1px solid ${notificationTypeMap[type].color};
    background: ${notificationTypeMap[type].color}4d;
    z-index: 1;
    position: absolute;
    width: 300px;
    left: 50%;
    top: 2px;
    transform: translate(-50%);
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-radius: 5px;
    font-family: Kanit;
    animation: animate 0.8s ease;

    @keyframes animate {
      0% {
        top: -60px;
      }
      50% {
        top: 10px;
      }
      100% {
        top: 2px;
      }
    }
  `}
`;

const SvgContainer = styled(Flex)<{ type: string }>`
  ${({ type }) => css`
    height: 20px;
    width: 20px;
    align-items: center;
    border-radius: 50%;
    border: 2px solid ${notificationTypeMap[type].color};
    justify-content: center;
  `}
`;

export function NotificationPopup() {
  const { open, message, type } = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  return (
    open &&
    createPortal(
      <Container type={type}>
        <Flex alignItems="center" gap="15px">
          <SvgContainer type={type}>
            <Svg as={notificationTypeMap[type].icon} />
          </SvgContainer>
          <Box>
            <Text color={notificationTypeMap[type].color}>{notificationTypeMap[type].title}</Text>
            <Text color={notificationTypeMap[type].color} fontSize={2} fontWeight={0}>
              {message}
            </Text>
          </Box>
        </Flex>
        <Svg
          cursor="pointer"
          onClick={() => dispatch(hideNotification())}
          as={ExitIcon}
          fill={notificationTypeMap[type].color}
        />
      </Container>,
      document.getElementById('root') as HTMLElement
    )
  );
}
