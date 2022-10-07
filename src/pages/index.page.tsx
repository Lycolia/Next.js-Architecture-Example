import { Layout } from '../components/Layouts/Layout';
import { IndexPageUseCase } from '../templates/IndexPage/IndexPageUseCase';

const IndexPage = () => {
  return (
    <Layout title={'Example'}>
      <IndexPageUseCase />
    </Layout>
  );
};

export default IndexPage;
