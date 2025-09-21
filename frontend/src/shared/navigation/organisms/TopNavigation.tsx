import { useEffect, useMemo } from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaBars as HamburgerMenuIcon,
  FaFeatherAlt as QuackerIcon,
  FaTimes as CloseIcon,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '@frontend/modules/auth/use-auth.hook';
import { PRACTICALS, route } from '@frontend/route';
import { AvatarPhoto, Icon } from '@frontend/shared/design-system/components';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';
import { RouterNavLink } from '@frontend/shared/navigation/atoms/RouterNavLink';

export function TopNavigation() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const mobileNav = useDisclosure();
  const location = useLocation();

  const baseLinks = useMemo(
    () => [
      { to: route.home(), title: 'Home' },
      ...PRACTICALS.map(({ id }) => ({
        to: route.practical(id),
        title: `${id}`,
      })),
      { to: route.about(), title: 'About' },
      { to: route.terms(), title: 'Terms' },
    ],
    [],
  );

  const closeHamburgerMenu = mobileNav.onClose;
  useEffect(
    function closeHamburgerMenuOnLocationChange() {
      closeHamburgerMenu();
    },
    [location, closeHamburgerMenu],
  );

  return (
    <Box as="nav" color="white" bg="green.700">
      <Flex justifyContent="space-between">
        <RouterLink
          to={route.home()}
          noUnderline
          color="white"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          py="3"
          px="4"
        >
          {/* TODO: Why are we using the Icon with `as`? Wouldn't be better to directly use the icon like <QuackerIcon />  */}
          <Icon as={QuackerIcon} mr="2" fontSize="xl" />
          Quacker
        </RouterLink>
        <Flex alignItems="stretch">
          <Flex display={{ base: 'none', md: 'flex' }}>
            {baseLinks.map(({ to, title }) => (
              <RouterNavLink to={to} key={to} color="white">
                {title}
              </RouterNavLink>
            ))}
          </Flex>
          {user ? (
            <>
              <RouterNavLink to={route.userDetail(user.username)} py="0">
                {user.profileImageUrl && (
                  <AvatarPhoto
                    src={user.profileImageUrl}
                    alt={user.username}
                    size="6"
                  />
                )}
                <Box
                  ml="2"
                  display={{ base: 'none', sm: 'block' }}
                  color="white"
                >
                  {user.name}
                </Box>
              </RouterNavLink>
              <Flex alignItems="center">
                <Button
                  colorPalette="green"
                  size="sm"
                  mx={{ base: '2', sm: '4' }}
                  onClick={async () => {
                    await signOut();
                    navigate(route.home());
                    window.location.reload();
                  }}
                >
                  Sign Out
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <RouterNavLink to={route.signIn()} color="white">
                Sign in
              </RouterNavLink>
              <Flex alignItems="center">
                <Button
                  colorPalette="green"
                  size="sm"
                  mx={{ base: '2', sm: '4' }}
                  asChild
                >
                  <RouterLink to={route.signUp()} color="white">
                    Sign up
                  </RouterLink>
                </Button>
              </Flex>
            </>
          )}

          <IconButton
            color="white"
            _hover={{ bg: 'green.600' }}
            _active={{ bg: 'green.500' }}
            display={{ base: 'flex', md: 'none' }}
            alignSelf="center"
            aria-label="Open menu"
            variant="ghost"
            fontSize="lg"
            onClick={mobileNav.onToggle}
            mr="2"
          >
            {mobileNav.open ? <CloseIcon /> : <HamburgerMenuIcon />}
          </IconButton>
        </Flex>
      </Flex>
      <Stack display={{ base: mobileNav.open ? 'flex' : 'none', md: 'none' }}>
        {baseLinks.map(({ to, title }) => (
          <RouterNavLink to={to} key={to} color="white">
            {title}
          </RouterNavLink>
        ))}
      </Stack>
    </Box>
  );
}
