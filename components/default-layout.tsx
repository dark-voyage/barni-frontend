import React, { useState } from 'react';
import {
  createStyles,
  Navbar,
  Group,
  Text,
  AppShell,
  Badge,
  Space,
  Flex,
  Anchor,
} from '@mantine/core';
import {
  IconLogout,
  IconHome,
  IconCheckbox,
  IconFileText,
  IconBug,
} from '@tabler/icons';
import Image from 'next/image';
import LogoPng from '@/assets/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      marginBottom: theme.spacing.md,
    },

    logo: {
      fontSize: theme.fontSizes.xl,
      fontWeight: 500,
      color: theme.colors.gray[0],
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: '/', label: 'Главная', icon: IconHome },
  { link: '/bugs', label: 'Баги', icon: IconBug, notifications: 1 },
  { link: '/guides', label: 'Гайды', icon: IconFileText },
  { link: '/checklist', label: 'Чеклист', icon: IconCheckbox },
];

export function DefaultLayout({ children }: { children: JSX.Element }) {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: router.pathname == item.link,
      })}
      href={item.link}
      key={item.label}
    >
      <Flex style={{ width: '100%' }}>
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
        {item.notifications && (
          <>
            <div style={{ flex: 1 }}></div>
            <Badge color="red">{item.notifications}</Badge>
          </>
        )}
      </Flex>
    </Link>
  ));

  return (
    <AppShell
      navbar={
        <Navbar width={{ sm: 300 }} p="md">
          <Navbar.Section grow>
            <Group className={classes.header}>
              <Image src={LogoPng} height={42} alt="Барни" />
              <Text className={classes.logo}>Барни</Text>
            </Group>
            {links}
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Выйти</span>
            </a>
          </Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}
