import { Heading, Paragraph } from '@frontend/shared/design-system/components';
import { MainSection, TopNavigation } from '@frontend/shared/navigation';

export function TermsAndConditionsTemplate() {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading>Terms and Conditions</Heading>
        <Paragraph>Live long and prosper</Paragraph>
      </MainSection>
    </>
  );
}
