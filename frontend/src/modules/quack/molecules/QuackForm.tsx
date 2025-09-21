import {
  Box,
  BoxProps,
  Button,
  Field,
  Flex,
  Spacer,
  Textarea,
} from '@chakra-ui/react';

export type QuackFormProps = Omit<BoxProps, 'onSubmit'> & {
  error?: Error;
  isLoading: boolean;
  text: string;
  setText: (text: string) => void;
  onSubmit: (data: { text: string }) => void;
  maxLength?: number;
};

export function QuackForm({
  error,
  isLoading,
  text,
  setText,
  onSubmit,
  maxLength = 250,
  ...restProps
}: QuackFormProps) {
  const length = !text ? 0 : text.length;
  const isLengthValid = length <= maxLength;

  return (
    <Box
      p="2"
      borderRadius="md"
      bg="gray.100"
      boxShadow="md"
      mb="4"
      {...restProps}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ text });
        }}
      >
        <Field.Root invalid={!!error}>
          <Textarea
            bg="white"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            name="comment"
            placeholder="Quack something..."
            disabled={isLoading}
            required
            minHeight={20}
          />
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            pt="2"
            gap="2"
            width="100%"
          >
            <Field.ErrorText
              m="0"
              alignSelf="flex-start"
            >{`${error}`}</Field.ErrorText>
            <Spacer />
            <Box
              as="span"
              fontSize="sm"
              color={isLengthValid ? 'gray.500' : 'red.500'}
            >
              {length}/{maxLength}
            </Box>
            <Button
              type="submit"
              size="md"
              rounded="13"
              loading={isLoading}
              loadingText="Sending"
              colorPalette="green"
            >
              Quack
            </Button>
          </Flex>
        </Field.Root>
      </form>
    </Box>
  );
}
