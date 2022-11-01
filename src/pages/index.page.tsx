import { Layout } from 'src/components/Layouts/Layout';
import { IndexPageUseCase } from 'src/templates/IndexPage/IndexPageUseCase';

const IndexPage = () => {
  return (
    <Layout title={'Example'}>
      <IndexPageUseCase />
    </Layout>
  );
};

export default IndexPage;
