import { Text, List } from '@magle-corp/design-system';
import { Article } from '../type';
import { ArticleTeaser } from './Article/ArticleTeaser';
import { Link } from '../component';

interface Props {
  articles: Article[];
  variant?: 'default' | 'teaser';
  spacing?: number;
}

const ArticlesList = ({ articles, variant = 'default', spacing }: Props) => {
  return (
    <div>
      <List spacing={spacing}>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`}>
              {variant == 'default' && <Text as="span">{article.title}</Text>}
              {variant === 'teaser' && <ArticleTeaser article={article} />}
            </Link>
          </li>
        ))}
      </List>
    </div>
  );
};

export { ArticlesList };
