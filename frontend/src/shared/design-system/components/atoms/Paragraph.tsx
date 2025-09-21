import { type ReactNode } from 'react';
import { Text, type TextProps } from '@chakra-ui/react';

export type ParagraphProps = TextProps & {
  children: ReactNode;
};

export function Paragraph(props: ParagraphProps) {
  return <Text {...props} />;
}
