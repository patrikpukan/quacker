import { Box, Stack } from '@chakra-ui/react';

import { useFragment } from '@frontend/gql';
import { route } from '@frontend/route';
import { AvatarPhoto } from '@frontend/shared/design-system/components';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';
import { formatDate } from '@shared/date';

import { UsersName } from '../atoms/UsersName';
import { UsersUserName } from '../atoms/UsersUserName';
import {
  BaseQuackFragment,
  type BaseQuackFragmentType,
} from '../graphql/BaseQuackFragment';

export type QuackProps = { quackFragment: BaseQuackFragmentType };

export function Quack({ quackFragment }: QuackProps) {
  const {
    user: { name, username, profileImageUrl },
    text,
    createdAt,
  } = useFragment(BaseQuackFragment, quackFragment);

  const linkToUser = route.userDetail(username);
  const nameInitials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <Stack
      as="article"
      direction="row"
      gap="4"
      width="100%"
      pb="2"
      mt="2"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Box width="16">
        <RouterLink to={linkToUser}>
          <AvatarPhoto
            size="16"
            src={
              profileImageUrl ??
              `https://placehold.co/200x200?text=${nameInitials}`
            }
            alt={name}
          />
        </RouterLink>
      </Box>

      <Stack>
        <Box>
          <RouterLink to={linkToUser} color="inherit">
            <UsersName name={name} /> <UsersUserName userName={username} />
          </RouterLink>
          {' - '}
          <Box as="span" fontSize="sm" color="gray.500">
            {formatDate(createdAt)}
          </Box>
        </Box>
        <Box wordBreak="break-word" whiteSpace="pre-line">
          {text}
        </Box>
      </Stack>
    </Stack>
  );
}
