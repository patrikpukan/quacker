import {
  AvatarPhoto,
  Heading,
} from '@frontend/shared/design-system/components';

export type UserDetailHeaderProps = {
  name: string;
  username: string;
  profileImageUrl?: string | null;
};

export function UserDetailHeader({
  name,
  username,
  profileImageUrl,
}: UserDetailHeaderProps) {
  return (
    <header>
      {profileImageUrl ? (
        <AvatarPhoto src={profileImageUrl} alt={name} size="32" mb="2" />
      ) : null}
      <Heading as="h2" m="0">
        {name}
      </Heading>
      <Heading as="h5" fontWeight="400" color="gray.500">
        @{username}
      </Heading>
    </header>
  );
}
