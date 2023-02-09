import Head from 'next/head';
import { DefaultLayout } from '@/components/default-layout';
import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';

const GuidesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Гайды | Барни</title>
      </Head>
      <div>Гайды</div>
    </>
  );
};

GuidesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default GuidesPage;
