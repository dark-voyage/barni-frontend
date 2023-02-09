import Head from 'next/head';
import { DefaultLayout } from '@/components/default-layout';
import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';

const BugsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Баги | Барни</title>
      </Head>
      <div>Баги</div>
    </>
  );
};

BugsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default BugsPage;
