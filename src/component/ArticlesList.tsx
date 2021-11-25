// Use.
import { Text, List } from '@magle-corp/design-system';
import { Article } from '../type';
import { ArticleTeaser } from './ArticleTeaser';
import { Link } from '../ui';

interface Props {
  articles: Article[];
  variant?: 'default' | 'teaser';
  spacing?: number;
}

const ArticlesList = ({ articles, variant = 'default', spacing }: Props) => {
  return (
    <>
      <List spacing={spacing}>
        {articles.map((article) => (
          <li key={article.id}>
            {variant === 'default' && (
              <Link href={`/articles/${article.slug}`} variant="internal">
                <Text as="span">{article.title}</Text>
              </Link>
            )}
            {variant === 'teaser' && (
              <Link href={`/articles/${article.slug}`}>
                <article>
                  <ArticleTeaser article={article} />
                </article>
              </Link>
            )}
          </li>
        ))}
      </List>
    </>
  );
};

export { ArticlesList };
