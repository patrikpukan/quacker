import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

export function Practical01Page() {
  const [counter, setCounter] = useState(0);
  return (
    <Box>
      <Heading>Practical 01</Heading>
      <Paragraph>Counter: {counter}</Paragraph>
      <Button onClick={() => setCounter((c) => c + 1)}>+1</Button>
    </Box>
  );
}
