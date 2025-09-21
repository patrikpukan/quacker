import { type ReactNode } from 'react';
import { Alert, type AlertRootProps } from '@chakra-ui/react';

export type ErrorBannerProps = AlertRootProps & {
  title?: string;
  children?: ReactNode;
};

export function ErrorBanner({
  title,
  children,
  ...restProps
}: ErrorBannerProps) {
  return (
    <Alert.Root
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p="4"
      borderRadius="md"
      {...restProps}
    >
      <Alert.Indicator boxSize="6" mr="0" />
      <Alert.Content>
        <Alert.Title mt="2" fontSize="lg">
          {title || 'Unknown error'}
        </Alert.Title>
        {children && (
          <Alert.Description maxWidth="sm" mt="4">
            {children}
          </Alert.Description>
        )}
      </Alert.Content>
    </Alert.Root>
  );
}
