// Use.
import { Text, List } from '@magle-corp/design-system';
import { Article } from '../type';
import { ArticleTeaser } from './index';
import { Link } from '../ui';

interface Props {
  articles: Article[];
  variant?: 'default' | 'teaser';
  spacing?: number;
}

/**
 * Provide component "ArticlesList".
 *
 * @param articles
 *   Array of Strapi custom content type "Article".
 * @param variant
 *   String for define behaviour of the list.
 * @param spacing
 *   Number for define space between each list item.
 */
const ArticlesList = ({ articles, variant = 'default', spacing }: Props) => {
  return (
    <>
      <List spacing={spacing}>
        {articles.map((article) => (
          <li key={article.id}>
            {variant === 'default' && (
              <Link
                href={`/publications/articles/${article.slug}`}
                variant="internal"
              >
                <Text as="span">{article.title}</Text>
              </Link>
            )}
            {variant === 'teaser' && (
              <Link href={`/publications/articles/${article.slug}`}>
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
