import { useState } from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

export function Practical01Page() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prevCount) => prevCount + 1);

  return (
    <Box>
      <Heading>Practical 01</Heading>
      <Paragraph>Counter: {counter}</Paragraph>
      <Stack direction="row">
        <Button colorScheme="green" onClick={incrementCounter}>
          +1
        </Button>
      </Stack>
    </Box>
  );
}
