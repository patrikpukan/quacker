import { useToken } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export type BodyBackgroundProps = { bg: string };

export function BodyBackground({ bg }: BodyBackgroundProps) {
  const [bodyBackground] = useToken('colors', [bg]);

  return (
    <Global
      styles={{
        body: { background: bodyBackground },
      }}
    />
  );
}
