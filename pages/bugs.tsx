import Head from 'next/head';
import { DefaultLayout } from '@/components/default-layout';
import { NextPageWithLayout } from '@/pages/_app';
import React, { ReactElement } from 'react';
import { Avatar, Badge, Button, Table, Title, Tooltip } from '@mantine/core';
import { Column, useTable } from 'react-table';

const columns: Column[] = [
  { Header: 'Название', accessor: 'name' },
  { Header: 'Проект', accessor: 'project' },
  {
    Header: 'Назначено',
    accessor: 'assigned',
    Cell: ({ value }) => (
      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="sm">
          <Tooltip label="Salazar Troop" withArrow>
            <Avatar radius="xl" />
          </Tooltip>
          <Tooltip label="Bandit Crimes" withArrow>
            <Avatar radius="xl" />
          </Tooltip>
          <Tooltip label="Jane Rata" withArrow>
            <Avatar radius="xl" />
          </Tooltip>
          <Tooltip
            withArrow
            label={
              <>
                <div>John Outcast</div>
                <div>Levi Capitan</div>
              </>
            }
          >
            <Avatar radius="xl">+2</Avatar>
          </Tooltip>
        </Avatar.Group>
      </Tooltip.Group>
    ),
  },
  {
    Header: 'Статус',
    accessor: 'status',
    Cell: ({ value }) => (
      <Badge
        color={
          ({ new: 'red', resolved: 'gray' } as { [key: string]: string })[value]
        }
      >
        {value == 'new' && 'Новый '}
        {value == 'resolved' && 'Решено '}
      </Badge>
    ),
  },
  {
    id: 'actions',
    Cell: () => (
      //<Button.Group>
      <Button variant="default" size="xs">
        Открыть
      </Button>
      //</Button.Group>
    ),
  },
];
const data = [
  {
    name: '.for.uz domain security issue',
    project: 'CCTLD.uz',
    assigned: [
      {
        firstName: 'Ali',
      },
    ],
    status: 'new',
  },
  {
    name: '.for.uz domain security issue',
    project: 'CCTLD.uz',
    assigned: [
      {
        firstName: 'Ali',
      },
    ],
    status: 'resolved',
  },
];

const BugsPage: NextPageWithLayout = () => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <Head>
        <title>Баги | Барни</title>
      </Head>
      <div>
        <Title pb={16}>Баги</Title>
        <Table {...getTableProps()}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th {...header.getHeaderProps()} key={index}>
                  {header.render('Header')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

BugsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default BugsPage;
