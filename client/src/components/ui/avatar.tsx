import { Flex } from './flex';
import { Text } from './text';

const height = 39;

export function Avatar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="red"
      borderRadius="50%"
      height={`${height}px`}
      width={`${height}px`}
    >
      <Text fontSize={height / 2} pl="2px">
        DY
      </Text>
    </Flex>
  );
}
