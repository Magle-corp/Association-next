// Use.
import { useAppContext } from '../src/AppContext';
import { Header, HeroBanner, Footer } from '../src/component';
import { Layout, Main } from '../src/ui';

/**
 * Provide home page.
 */
const Home = () => {
  const { homepage, identity } = useAppContext();

  return (
    <>
      {homepage && identity && (
        <>
          <Header identity={identity} />
          <Layout variant="mono">
            <Main variant="mono">
              <HeroBanner homepage={homepage} />
            </Main>
          </Layout>
          <Footer identity={identity} />
        </>
      )}
    </>
  );
};

export default Home;
