import { type ReactNode } from 'react';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

import { MainSection } from '../atoms';
import { TopNavigation } from '../organisms';

export type PlaceholderTemplateProps = {
  title: string;
  children?: ReactNode;
};

export function PlaceholderTemplate({
  title,
  children,
}: PlaceholderTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading>{title}</Heading>

        {!children ? (
          <Paragraph>This page is empty for now...</Paragraph>
        ) : (
          children
        )}
      </MainSection>
    </>
  );
}
