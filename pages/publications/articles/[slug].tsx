// Use.
import qs from 'qs';
import { Article, Identity } from '../../../src/type';
import {
  Header,
  Breadcrumb,
  ArticleDetail,
  Footer,
} from '../../../src/component';
import { Layout, Main } from '../../../src/ui';

interface StaticParams {
  params: {
    slug: string;
  };
}

interface Props {
  article: Article[];
  identity: Identity;
}

/**
 *
 * @param article
 *   Strapi custom content type "Article".
 * @param identity
 *   Strapi custom content type "Identite".
 */
const Post = ({ article, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout variant="mono_breadcrumb">
        <Breadcrumb variant="mono_breadcrumb" />
        <Main variant="mono_breadcrumb">
          <ArticleDetail article={article[0]} />
        </Main>
      </Layout>
      <Footer identity={identity} />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }: StaticParams) {
  const articleQuery = `/articles?${qs.stringify({
    _sort: 'published_at:DESC',
    _where: [{ slug: params.slug }],
  })}`;
  const articleResult = await fetch(`${process.env.BASE_URL}${articleQuery}`);
  const article = await articleResult.json();

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: {
      article,
      identity,
    },
    revalidate: 60 * 60,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/articles`);
  const articles = await res.json();

  const paths = articles.map((article: Article) => ({
    params: {
      slug: article.slug,
    },
  }));

  return { paths, fallback: 'blocking' };
}
