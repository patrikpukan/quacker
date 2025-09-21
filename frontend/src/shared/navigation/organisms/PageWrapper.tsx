import { type ReactNode } from 'react';
import { BoxProps } from '@chakra-ui/react';

import { MainSection } from '../atoms';

import { TopNavigation } from './TopNavigation';

export type PageWrapperProps = {
  maxW?: BoxProps['maxW'];
  children: ReactNode;
};

export function PageWrapper({
  children,
  maxW,
  ...restProps
}: PageWrapperProps) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW={maxW} {...restProps}>
        {children}
      </MainSection>
    </>
  );
}
