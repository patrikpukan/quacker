import { Box, Flex, Stack } from '@chakra-ui/react';
import { FaFeatherAlt as QuackerIcon } from 'react-icons/fa';

import { Icon } from '@frontend/shared/design-system/components';

export function Loading() {
  return (
    <Flex
      justifyContent="center"
      color="gray.500"
      fontSize="lg"
      fontWeight="bold"
    >
      <Stack p="6" gap="4" direction="row" alignItems="center">
        <Icon as={QuackerIcon} isSpinning />
        <Box>Loading...</Box>
      </Stack>
    </Flex>
  );
}
