// Use.
import { useAppContext } from '../src/AppContext';
import { Header, HeroBanner, Footer } from '../src/component';
import { Layout, Main } from '../src/ui';
import { Homepage, Identity } from '../src/type';

interface Props {
  homepage?: Homepage;
  identity?: Identity;
}

/**
 * Provide home page.
 */
const Home = () => {
  console.log(useAppContext());
  const { homepage, identity } = useAppContext() as Props;

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
