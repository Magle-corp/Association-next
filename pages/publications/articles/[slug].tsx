// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main } from '@magle-corp/design-system';
import { Article, Identity } from '../../../src/type';
import {
  Header,
  Breadcrumb,
  ArticleDetail,
  Footer,
} from '../../../src/component';
import { Layout } from '../../../src/ui';

interface StaticParams {
  params: {
    slug: string;
  };
}

interface Props {
  article: Article[];
  identity: Identity;
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`;

const StyledMain = styled(Main)`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Post = ({ article, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <Breadcrumb />
        <StyledMain>
          <ArticleDetail article={article[0]} />
        </StyledMain>
      </StyledLayout>
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
