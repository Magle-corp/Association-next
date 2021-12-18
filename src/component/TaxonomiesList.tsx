// Use.
import styled from 'styled-components';
import { Text } from '@magle-corp/design-system';
import { Taxonomy } from '../type';
import { Link } from '../ui';

interface Props {
  className?: string;
  taxonomies?: Taxonomy[];
  variant?: 'default' | 'link';
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;

  > * {
    margin-top: 10px;
  }

  > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const StyledLink = styled(Link)`
  > * {
    display: block;
  }
`;

/**
 * Provide component "TaxonomiesList".
 *
 * @param className
 *   String for override Styled component style.
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param variant
 *   String for define behaviour of the list.
 */
const TaxonomiesList = ({
  className,
  taxonomies,
  variant = 'default',
}: Props) => {
  return (
    <>
      {taxonomies && (
        <StyledList className={className}>
          {variant == 'default' &&
            taxonomies.map((taxonomy) => (
              <li key={taxonomy.id}>
                <Text variant="tag">{taxonomy.title}</Text>
              </li>
            ))}
          {variant == 'link' &&
            taxonomies.map((taxonomy) => (
              <li key={taxonomy.id} data-cy="link">
                <StyledLink
                  href={`/publications/articles?taxonomy=${taxonomy.title}`}
                >
                  <Text as="span" variant="tag">
                    {taxonomy.title}
                  </Text>
                </StyledLink>
              </li>
            ))}
        </StyledList>
      )}
    </>
  );
};

export { TaxonomiesList };
