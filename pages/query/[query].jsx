import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layouts/primary';
import Query from '../../components/partials/Query';
const QueryPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <Layout>
      <Query query={query} />
    </Layout>
  );
};

export default QueryPage;
