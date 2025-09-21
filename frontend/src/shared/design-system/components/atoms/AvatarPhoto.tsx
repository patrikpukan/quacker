import { Image, type ImageProps } from '@chakra-ui/react';

export type AvatarPhotoProps = ImageProps & {
  size?: string;
};

export function AvatarPhoto({
  src,
  alt,
  size = '16',
  ...restProps
}: AvatarPhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      borderRadius="md"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.100"
      w={size}
      h={size}
      maxW={size}
      {...restProps}
    />
  );
}
