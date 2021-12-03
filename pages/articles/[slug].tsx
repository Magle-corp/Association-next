// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main } from '@magle-corp/design-system';
import { Article } from '../../src/type';
import { Header, ArticleDetail } from '../../src/component';
import { Layout } from '../../src/ui';

interface StaticParams {
  params: {
    slug: string;
  };
}

interface Props {
  article: Article[];
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`;

const Post = ({ article }: Props) => {
  return (
    <>
      <Header />
      <StyledLayout>
        <Main>
          <ArticleDetail article={article[0]} />
        </Main>
      </StyledLayout>
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

  return {
    props: {
      article,
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
