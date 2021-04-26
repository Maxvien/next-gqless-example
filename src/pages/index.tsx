import { GetStaticProps } from 'next';
import { PropsWithServerCache } from '@gqless/react';
import { prepareReactRender, useHydrateCache, useQuery } from '../gqless';
import { Layout } from '../components/layout';

interface Props extends PropsWithServerCache {}

export default function Page({ cacheSnapshot }: Props) {
  useHydrateCache({ cacheSnapshot });

  const query = useQuery();

  return (
    <Layout>
      <h1>Home</h1>
      <p>{query.shop.name}</p>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps<Props> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return { props: { cacheSnapshot } };
};
