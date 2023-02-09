import Head from 'next/head';
import { DefaultLayout } from '@/components/default-layout';
import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';

const ChecklistPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Чеклист | Барни</title>
      </Head>
      <div>Чеклист</div>
    </>
  );
};

ChecklistPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ChecklistPage;
