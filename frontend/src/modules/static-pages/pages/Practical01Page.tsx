import { Box, Button } from '@chakra-ui/react';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

export function Practical01Page() {
  return (
    <Box>
      <Heading>Practical 01</Heading>
      <Paragraph>Hello!</Paragraph>
      <Button onClick={() => alert('Button Pressed!')}>Press Me</Button>
    </Box>
  );
}
