// Use.
import styled from 'styled-components';
import { Text } from '@magle-corp/design-system';
import { Article, Event, Taxonomy } from '../type';
import { ArticleTeaser, EventTeaser } from './index';
import { Link } from '../ui';

interface Props {
  className?: string;
  items: Article[] | Event[] | Taxonomy[];
  variant:
    | 'article_default'
    | 'article_teaser'
    | 'event_teaser'
    | 'taxo_default'
    | 'taxo_link';
  spacing: number;
}

const StyledList = styled.ul<{ spacing: number; variant: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;

  ${({ spacing, variant }) =>
    variant == 'taxo_default' || variant == 'taxo_link'
      ? `
    > * {
        margin-top: 10px;
    }
    > *:not(:last-child) {
        margin-right: 5px;
    }`
      : `
    > *:not(:first-child) {
        margin-top: ${spacing}px;
    }`}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => theme.typography.call_action}
`;

/**
 * Provide component "List".
 *
 * @param className
 *   String for override Styled component style.
 * @param items
 *   Array of Strapi custom content type "Article" or "Event".
 * @param variant
 *   String for define behaviour of the list.
 * @param spacing
 *   Number for define space between each list item.
 */
const ItemsList = ({ className, items, variant, spacing }: Props) => {
  return (
    <>
      <StyledList className={className} spacing={spacing} variant={variant}>
        {variant == 'article_default' &&
          items.map((article) => (
            <li key={article.id} data-cy="link">
              <Link
                href={`/publications/articles/${
                  'slug' in article ? article.slug : '404'
                }`}
                variant="internal"
              >
                <Text as="span">{article.title}</Text>
              </Link>
            </li>
          ))}
        {variant == 'article_teaser' &&
          items.map((article) => (
            <li key={article.id} data-cy="link">
              <Link
                href={`/publications/articles/${
                  'slug' in article ? article.slug : '404'
                }`}
              >
                <article>
                  <ArticleTeaser article={article as Article} />
                </article>
              </Link>
            </li>
          ))}
        {variant == 'event_teaser' &&
          items.map((event) => (
            <li key={event.id}>
              <article>
                <EventTeaser event={event as Event} />
              </article>
            </li>
          ))}
        {variant == 'taxo_default' &&
          items.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Text variant="tag">{taxonomy.title}</Text>
            </li>
          ))}
        {variant == 'taxo_link' &&
          items.map((taxonomy) => (
            <li key={taxonomy.id} data-cy="link">
              <StyledLink
                href={`/publications/articles?taxonomy=${taxonomy.title}`}
              >
                <Text as="span">{taxonomy.title}</Text>
              </StyledLink>
            </li>
          ))}
      </StyledList>
    </>
  );
};

export { ItemsList };
