import {
  Icon as ChakraIcon,
  type IconProps as ChakraIconProps,
} from '@chakra-ui/react';

export type IconProps = ChakraIconProps & {
  isSpinning?: boolean;
};

export function Icon({ isSpinning = false, ...restProps }: IconProps) {
  return (
    <ChakraIcon
      {...restProps}
      animation={isSpinning ? `spin 2s linear infinite` : undefined}
    />
  );
}
