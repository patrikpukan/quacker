import { createListCollection } from '@ark-ui/react';
import {
  Box,
  Button,
  Field,
  Flex,
  Input,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Textarea,
} from '@chakra-ui/react';
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

export function Practical03Page() {
  return (
    <Box>
      <Heading>Practical 03</Heading>

      <Box
        mt="4"
        p={{ base: '4', md: '6' }}
        bg="gray.50"
        border="1px"
        borderColor="blackAlpha.200"
        borderRadius="xl"
        boxShadow="sm"
      >
        <Heading as="h2">Profile</Heading>
        <Paragraph color="gray.600" mb="6">
          This is your profile information.
        </Paragraph>

        <Stack gap="4">
          <Field.Root>
            <Field.Label>First name</Field.Label>
            <Input placeholder="Enter your first name" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Last name</Field.Label>
            <Input placeholder="Enter your last name" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Username</Field.Label>
            <Input placeholder="Enter your username" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="john@example.com" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Profile bio</Field.Label>
            <Textarea placeholder="Tell us about yourself" minH="28" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Visibility</Field.Label>
            <Box w="100%">
              {(() => {
                const items = [
                  { label: 'Public', value: 'public' },
                  { label: 'Friends', value: 'friends' },
                  { label: 'Private', value: 'private' },
                ];
                const collection = createListCollection({
                  items,
                  itemToString: (item) => item.label,
                });
                return (
                  <Select.Root
                    w="100%"
                    collection={collection}
                    defaultValue={[items[0].value]}
                  >
                    <Select.Control w="100%">
                      <Select.Trigger w="100%" justifyContent="space-between">
                        <Select.ValueText placeholder="Select option" />
                        <Select.Indicator>
                          <ChevronDownIcon />
                        </Select.Indicator>
                      </Select.Trigger>
                    </Select.Control>
                    <Select.Positioner>
                      <Select.Content>
                        {items.map((item) => (
                          <Select.Item key={item.value} item={item}>
                            <Select.ItemText>{item.label}</Select.ItemText>
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Select.Root>
                );
              })()}
            </Box>
          </Field.Root>

          <Box pt="2">
            <Switch.Root>
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label>Agree to Terms and Conditions</Switch.Label>
            </Switch.Root>
          </Box>

          <Flex justifyContent="flex-end" pt="2">
            <Button colorPalette="green" onClick={() => alert('Saved!')}>
              Save
            </Button>
          </Flex>
        </Stack>
      </Box>

      <Box
        mt="4"
        p={{ base: '4', md: '6' }}
        bg="gray.50"
        border="1px"
        borderColor="blackAlpha.200"
        borderRadius="xl"
        boxShadow="sm"
      >
        <Heading as="h2">Notifications</Heading>
        <Paragraph color="gray.600" mb="6">
          Setup how much notification you will receive
        </Paragraph>

        <RadioGroup.Root colorPalette="gray" defaultValue="mentions">
          <Stack gap="4">
            <RadioGroup.Item value="all">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>
                Every time someone quacks
              </RadioGroup.ItemText>
            </RadioGroup.Item>

            <RadioGroup.Item value="mentions">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>
                Only mentions (@username)
              </RadioGroup.ItemText>
            </RadioGroup.Item>

            <RadioGroup.Item value="never">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Never</RadioGroup.ItemText>
            </RadioGroup.Item>
          </Stack>
        </RadioGroup.Root>

        <Flex justifyContent="flex-end" pt="2">
          <Button colorPalette="green" onClick={() => alert('Saved!')}>
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
