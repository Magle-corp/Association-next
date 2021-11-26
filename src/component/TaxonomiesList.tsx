// Use.
import styled from 'styled-components';
import { Text, List } from '@magle-corp/design-system';
import { Taxonomy } from '../type';
import { Link } from '../ui';

interface Props {
  className?: string;
  taxonomies: Taxonomy[];
  variant?: 'default' | 'link';
}

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
      <List className={className} variant="horizontal">
        {variant == 'default' &&
          taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Text variant="tag">{taxonomy.title}</Text>
            </li>
          ))}
        {variant == 'link' &&
          taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <StyledLink href={`/articles?taxonomy=${taxonomy.title}`}>
                <Text as="span" variant="tag">
                  {taxonomy.title}
                </Text>
              </StyledLink>
            </li>
          ))}
      </List>
    </>
  );
};

export { TaxonomiesList };
