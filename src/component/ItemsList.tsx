// Use.
import styled, { css } from 'styled-components';
import { Article, Event, Taxonomy } from '../type';
import { ArticleTeaser, EventTeaser } from './index';
import { Link, Text } from '../ui';

interface Props {
  className?: string;
  items: Article[] | Event[] | Taxonomy[];
  variant:
    | 'article_default'
    | 'taxo_default'
    | 'taxo_link'
    | `${string}_teaser`;
  spacing?: string;
}

const StyledList = styled.ul<{ spacing: string; variant: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;

  ${({ variant, spacing }) =>
    spacing != '0px' &&
    variant != 'taxo_default' &&
    variant != 'taxo_link' &&
    css`
      > *:not(:first-child) {
        margin: ${spacing};
      }
    `};

  ${({ variant }) =>
    (variant == 'taxo_default' || variant == 'taxo_link') &&
    css`
      > * {
        margin-top: 10px;
      }
      > *:not(:last-child) {
        margin-right: 5px;
      }
    `};
`;

/**
 * Provide component "ItemsList".
 *
 * @param className
 *   Styled component override.
 * @param items
 *   Array of Strapi custom content type "Article" or "Event".
 * @param variant
 *   String for define behaviour of the component, string.
 * @param spacing
 *   The margin between each child, string.
 */
const ItemsList = ({ className, items, variant, spacing = '0px' }: Props) => {
  return (
    <>
      <StyledList className={className} spacing={spacing} variant={variant}>
        {(variant == 'article_default' || variant == 'article_teaser') &&
          items.map((article) => (
            <li key={article.id}>
              <Link
                href={`/publications/articles/${
                  'slug' in article ? article.slug : '404'
                }`}
                variant={variant == 'article_default' ? 'internal' : 'default'}
              >
                {variant == 'article_default' && (
                  <Text as="span">{article.title}</Text>
                )}
                {variant == 'article_teaser' && (
                  <ArticleTeaser article={article as Article} />
                )}
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
        {(variant == 'taxo_link' || variant == 'taxo_default') &&
          items.map((taxonomy) => (
            <li key={taxonomy.id}>
              {variant == 'taxo_default' && (
                <Text variant="tag">{taxonomy.title}</Text>
              )}
              {variant == 'taxo_link' && (
                <Link
                  variant="link_action"
                  href={`/publications/articles?taxonomy=${taxonomy.title}`}
                >
                  <Text as="span">{taxonomy.title}</Text>
                </Link>
              )}
            </li>
          ))}
      </StyledList>
    </>
  );
};

export { ItemsList };
