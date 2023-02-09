import Head from 'next/head';
import { DefaultLayout } from '@/components/default-layout';
import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Барни</title>
      </Head>
      <div>Барни</div>
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
