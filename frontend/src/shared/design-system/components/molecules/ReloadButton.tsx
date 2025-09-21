import {
  Icon,
  TransparentButton,
  type TransparentButtonProps,
} from '@frontend/shared/design-system/components';
import { SyncIcon } from '@frontend/shared/design-system/icons';

export type ReloadButtonProps = TransparentButtonProps & {
  isLoading?: boolean;
};

export function ReloadButton({ isLoading, ...restProps }: ReloadButtonProps) {
  return (
    <TransparentButton bg="gray.100" {...restProps}>
      <Icon as={SyncIcon} isSpinning={isLoading} mr="2" fontSize="xs" />
      Reload
    </TransparentButton>
  );
}
